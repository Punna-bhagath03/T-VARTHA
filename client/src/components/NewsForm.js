import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { createNews } from '../services/api';
const NewsForm = ({ onCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);
    const handleSubmit = async (event) => {
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
        }
        catch {
            setError('Failed to post news. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("form", { className: "news-form", onSubmit: handleSubmit, children: [_jsx("h2", { children: "Post News" }), _jsx("label", { htmlFor: "title", children: "Title" }), _jsx("input", { id: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Enter news title", required: true }), _jsx("label", { htmlFor: "description", children: "Description" }), _jsx("textarea", { id: "description", value: description, onChange: (event) => setDescription(event.target.value), placeholder: "Enter news description", rows: 4, required: true }), _jsx("label", { htmlFor: "image", children: "Image" }), _jsx("input", { id: "image", name: "image", ref: fileInputRef, type: "file", accept: "image/*", onChange: (event) => setImage(event.target.files?.[0] ?? null), required: true }), error ? _jsx("p", { className: "error-message", children: error }) : null, _jsx("button", { type: "submit", disabled: loading, children: loading ? 'Posting...' : 'Submit' })] }));
};
export default NewsForm;
