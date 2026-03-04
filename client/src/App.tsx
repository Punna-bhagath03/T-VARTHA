import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import { fetchNews } from './services/api';
import { NewsItem } from './types/news';

const App = (): JSX.Element => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNews = async (): Promise<void> => {
      try {
        setLoading(true);
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
    <BrowserRouter>
      <div className="app-shell">
        <header className="top-header">
          <div className="logo-circle">TV</div>
          <h1>T VARTHA</h1>
          <p>tvartha2026@gmail.com</p>
          <p>6304978211</p>
        </header>

        <main className="main-container">
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
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
