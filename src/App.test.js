import { render, screen } from '@testing-library/react';
import App from './App';
import Child from './Child';
import Contact from './Contact';
import Parent from './Parent';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Data from Parent', () => {
  render(<Parent />);
  const linkElement = screen.getByText('Data from Parent');
  expect(linkElement).toBeInTheDocument();
});

test('renders Data from Contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText('Please contact us for more details.');
  expect(linkElement).toBeInTheDocument();
});
