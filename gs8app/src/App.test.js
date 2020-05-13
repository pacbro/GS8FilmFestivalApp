import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
import App from './components/App';
=======
import App from './App';
>>>>>>> f1d18362b12a04ab084c1761b3a72cbb7f711fd1

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
