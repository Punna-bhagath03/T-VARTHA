import { NewsItem } from '../types/news';

interface NewsListProps {
  items: NewsItem[];
}

const NewsList = ({ items }: NewsListProps): JSX.Element => {
  const formatDate = (value?: string): string => {
    if (!value) {
      return 'Date unavailable';
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return 'Date unavailable';
    }

    return parsed.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  if (items.length === 0) {
    return <p className="empty-state">No news posted yet.</p>;
  }

  return (
    <section className="news-list">
      {items.map((item) => (
        <article className="news-card" key={item._id}>
          <img src={item.imageUrl} alt={item.title} className="news-image" />
          <div className="news-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <time dateTime={item.createdAt}>
              {formatDate(item.createdAt)}
            </time>
          </div>
        </article>
      ))}
    </section>
  );
};

export default NewsList;
