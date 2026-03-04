import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import NewsForm from '../components/NewsForm';
import NewsList from '../components/NewsList';
import { fetchNews } from '../services/api';
const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        document.title = 'T VARTHA | Home';
    }, []);
    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);
                setError('');
                const data = await fetchNews();
                setNews(data);
            }
            catch {
                setError('Unable to fetch news right now.');
            }
            finally {
                setLoading(false);
            }
        };
        void loadNews();
    }, []);
    const handleCreated = (item) => {
        setNews((prev) => [item, ...prev]);
    };
    return (_jsxs("section", { className: "main-container", "aria-label": "Home News Section", children: [_jsx("section", { className: "layout-panel left-panel", children: _jsx(NewsForm, { onCreated: handleCreated }) }), _jsxs("section", { className: "layout-panel right-panel", children: [_jsx("h2", { className: "panel-title", children: "All Posted News" }), _jsxs("div", { className: "panel-scroll", children: [loading ? _jsx("p", { className: "state-message", children: "Loading news..." }) : null, error ? _jsx("p", { className: "error-message", children: error }) : null, !loading && !error ? _jsx(NewsList, { items: news }) : null] })] })] }));
};
export default Home;
