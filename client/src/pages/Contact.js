import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
const Contact = () => {
    useEffect(() => {
        document.title = 'T VARTHA | Contact';
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (_jsx("section", { className: "content-page", children: _jsxs("article", { className: "content-card", children: [_jsx("h1", { children: "Contact Us" }), _jsx("p", { children: "App Name: T VARTHA" }), _jsx("p", { children: "Email: tvartha2026@gmail.com" }), _jsx("p", { children: "Phone: 6304978211" }), _jsx("h2", { children: "Quick Message" }), _jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: "contactName", children: "Name" }), _jsx("input", { id: "contactName", type: "text", placeholder: "Enter your name" }), _jsx("label", { htmlFor: "contactEmail", children: "Email" }), _jsx("input", { id: "contactEmail", type: "email", placeholder: "Enter your email" }), _jsx("label", { htmlFor: "contactMessage", children: "Message" }), _jsx("textarea", { id: "contactMessage", rows: 4, placeholder: "Type your message" }), _jsx("button", { type: "submit", children: "Send Message" })] })] }) }));
};
export default Contact;
