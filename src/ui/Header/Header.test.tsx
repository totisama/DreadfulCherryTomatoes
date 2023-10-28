import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('Header renders Dreadful logo', () => {
  render(<Header />);
  const logo = screen.getByAltText(/Dreadful logo/i);
  expect(logo).toBeInTheDocument();
});
