import React from 'react';
import { createRoot } from 'react-dom/client';

import '@ds.ui/scss/lib/Utilities.css';
import '@ds.ui/scss/lib/Text.css';
import '@ds.ui/scss/lib/Margin.css';
import '@ds.ui/scss/lib/Select.css';
import '@ds.ui/scss/lib/global.css';
import '@ds.ui/scss/lib/Typography.css';
import '@ds.ui/scss/lib/Input.css';
import '@ds.ui/scss/lib/Button.css';
import '@ds.ui/scss/lib/Margin.css';

import App from './App';


const root = createRoot(document.querySelector('#root') as Element);
root.render(<App />);
