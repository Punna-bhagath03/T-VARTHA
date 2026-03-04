import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms', path: '/terms' }
];
const Navbar = () => {
    const location = useLocation();
    return (_jsxs("header", { className: "top-header", children: [_jsx("div", { className: "logo-circle", children: "TV" }), _jsx("h1", { children: "T VARTHA" }), _jsx("p", { children: "tvartha2026@gmail.com" }), _jsx("p", { children: "6304978211" }), _jsx("nav", { className: "main-nav", "aria-label": "Primary", children: navItems.map((item) => (_jsx(Link, { to: item.path, className: location.pathname === item.path ? 'nav-link active' : 'nav-link', children: item.label }, item.path))) })] }));
};
export default Navbar;
