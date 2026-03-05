import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = 'T VARTHA | Privacy Policy';
        window.location.replace('/policies/privacy-policy.pdf');
    }, []);
    return (_jsx("section", { className: "content-page", children: _jsxs("article", { className: "policy-card", children: [_jsx("h1", { children: "Privacy Policy" }), _jsx("p", { children: "Redirecting to Privacy Policy PDF..." }), _jsxs("p", { children: ["If the file does not open automatically,", ' ', _jsx("a", { href: "/policies/privacy-policy.pdf", children: "click here" }), "."] })] }) }));
};
export default PrivacyPolicy;
