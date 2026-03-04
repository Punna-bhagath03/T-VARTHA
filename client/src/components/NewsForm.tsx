import { FormEvent, useRef, useState } from 'react';
import { createNews } from '../services/api';
import { NewsItem } from '../types/news';

interface NewsFormProps {
  onCreated: (news: NewsItem) => void;
}

const NewsForm = ({ onCreated }: NewsFormProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError('');

    if (!image) {
      setError('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      setLoading(true);
      const created = await createNews(formData);
      onCreated(created);
      setError('');
      setTitle('');
      setDescription('');
      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch {
      setError('Failed to post news. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2>Post News</h2>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter news title"
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Enter news description"
        rows={4}
        required
      />

      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(event) => setImage(event.target.files?.[0] ?? null)}
        required
      />

      {error ? <p className="error-message">{error}</p> : null}

      <button type="submit" disabled={loading}>
        {loading ? 'Posting...' : 'Submit'}
      </button>
    </form>
  );
};

export default NewsForm;
