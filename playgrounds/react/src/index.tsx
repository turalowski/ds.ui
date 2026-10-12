import React from 'react';
import { createRoot } from 'react-dom/client';

import '@ds.ui/scss/lib/global.css';
import '@ds.ui/scss/lib/Utilities.css';
import '@ds.ui/scss/lib/Typography.css';
import '@ds.ui/scss/lib/Margin.css';
import '@ds.ui/scss/lib/Button.css';
import '@ds.ui/scss/lib/Input.css';
import '@ds.ui/scss/lib/Badge.css';
import '@ds.ui/scss/lib/Switch.css';
import '@ds.ui/scss/lib/Tabs.css';
import '@ds.ui/scss/lib/Accordion.css';
import './showcase.css';

import App from './App';


const root = createRoot(document.querySelector('#root') as Element);
root.render(<App />);
