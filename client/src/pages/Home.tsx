import { useEffect, useState } from 'react';
import NewsForm from '../components/NewsForm';
import NewsList from '../components/NewsList';
import { fetchNews } from '../services/api';
import { NewsItem } from '../types/news';

const Home = (): JSX.Element => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'T VARTHA | Home';
  }, []);

  useEffect(() => {
    const loadNews = async (): Promise<void> => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchNews();
        setNews(data);
      } catch {
        setError('Unable to fetch news right now.');
      } finally {
        setLoading(false);
      }
    };

    void loadNews();
  }, []);

  const handleCreated = (item: NewsItem): void => {
    setNews((prev) => [item, ...prev]);
  };

  return (
    <section className="main-container" aria-label="Home News Section">
      <section className="layout-panel left-panel">
        <NewsForm onCreated={handleCreated} />
      </section>

      <section className="layout-panel right-panel">
        <h2 className="panel-title">All Posted News</h2>
        <div className="panel-scroll">
          {loading ? <p className="state-message">Loading news...</p> : null}
          {error ? <p className="error-message">{error}</p> : null}
          {!loading && !error ? <NewsList items={news} /> : null}
        </div>
      </section>
    </section>
  );
};

export default Home;
