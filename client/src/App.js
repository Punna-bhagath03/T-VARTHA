import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import { fetchNews } from './services/api';
const App = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);
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
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: "app-shell", children: [_jsxs("header", { className: "top-header", children: [_jsx("div", { className: "logo-circle", children: "TV" }), _jsx("h1", { children: "T VARTHA" }), _jsx("p", { children: "tvartha2026@gmail.com" }), _jsx("p", { children: "6304978211" })] }), _jsxs("main", { className: "main-container", children: [_jsx("section", { className: "layout-panel left-panel", children: _jsx(NewsForm, { onCreated: handleCreated }) }), _jsxs("section", { className: "layout-panel right-panel", children: [_jsx("h2", { className: "panel-title", children: "All Posted News" }), _jsxs("div", { className: "panel-scroll", children: [loading ? _jsx("p", { className: "state-message", children: "Loading news..." }) : null, error ? _jsx("p", { className: "error-message", children: error }) : null, !loading && !error ? _jsx(NewsList, { items: news }) : null] })] })] })] }) }));
};
export default App;
