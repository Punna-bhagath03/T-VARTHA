import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
const Terms = () => {
    useEffect(() => {
        document.title = 'T VARTHA | Terms and Conditions';
        window.location.replace('/policies/terms-and-conditions.pdf');
    }, []);
    return (_jsx("section", { className: "content-page", children: _jsxs("article", { className: "policy-card", children: [_jsx("h1", { children: "Terms and Conditions" }), _jsx("p", { children: "Redirecting to Terms and Conditions PDF..." }), _jsxs("p", { children: ["If the file does not open automatically,", ' ', _jsx("a", { href: "/policies/terms-and-conditions.pdf", children: "click here" }), "."] })] }) }));
};
export default Terms;
