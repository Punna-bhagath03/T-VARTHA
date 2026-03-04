import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        document.title = 'T VARTHA | About';
    }, []);
    return (_jsx("section", { className: "content-page", children: _jsxs("article", { className: "content-card", children: [_jsx("h1", { children: "About T VARTHA" }), _jsx("p", { children: "T VARTHA is a modern news posting platform designed to help users share the latest updates quickly and clearly." }), _jsx("h2", { children: "What We Do" }), _jsx("p", { children: "Users can create news posts by adding a title, description, and image. Every post is timestamped automatically and displayed with newest updates first." }), _jsx("h2", { children: "Technology & Security" }), _jsxs("ul", { children: [_jsx("li", { children: "Frontend built with React and TypeScript." }), _jsx("li", { children: "Backend powered by Node.js, Express, and TypeScript." }), _jsx("li", { children: "Data stored in MongoDB using Mongoose." }), _jsx("li", { children: "Images uploaded and stored securely through Cloudinary." })] }), _jsx("h2", { children: "Our Vision" }), _jsx("p", { children: "T VARTHA aims to provide a clean, reliable, and scalable platform for community news and timely updates." })] }) }));
};
export default About;
