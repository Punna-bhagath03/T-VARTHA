import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NewsList = ({ items }) => {
    const formatDate = (value) => {
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
        return _jsx("p", { className: "empty-state", children: "No news posted yet." });
    }
    return (_jsx("section", { className: "news-list", children: items.map((item) => (_jsxs("article", { className: "news-card", children: [_jsx("img", { src: item.imageUrl, alt: item.title, className: "news-image" }), _jsxs("div", { className: "news-content", children: [_jsx("h3", { children: item.title }), _jsx("p", { children: item.description }), _jsx("time", { dateTime: item.createdAt, children: formatDate(item.createdAt) })] })] }, item._id))) }));
};
export default NewsList;
