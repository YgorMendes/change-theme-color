import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './providers/Theme';

test('renders learn react link', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider> 
    );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
