import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'captalento-system-ui/dist/css/system-ui.css';
import { ThemeProvider } from './providers/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

reportWebVitals();
