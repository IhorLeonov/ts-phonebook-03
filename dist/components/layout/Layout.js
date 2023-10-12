import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from 'components/layout/Layout.styled';
export const Layout = ({ children }) => {
    return (_jsxs(Container, { children: [_jsx("header", {}), _jsx("main", { children: children }), _jsx("footer", {})] }));
};
//# sourceMappingURL=Layout.js.map