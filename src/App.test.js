import { render, screen } from '@testing-library/react';
import MainMenu from './MainMenu';

test('renders learn react link', () => {
  render(<MainMenu />);
  const linkElement = screen.getByText(/The Recycler/i);
  expect(linkElement).toBeInTheDocument();
});
