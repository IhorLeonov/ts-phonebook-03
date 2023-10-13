import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/Theme';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { theme: theme, children: _jsx(App, {}) }) }));
//# sourceMappingURL=index.js.map