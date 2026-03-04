import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const MainLayout = () => {
    return (_jsxs("div", { className: "app-shell", children: [_jsx(Navbar, {}), _jsx("main", { className: "layout-content", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default MainLayout;
