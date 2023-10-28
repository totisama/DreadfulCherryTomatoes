import { render, screen } from '@testing-library/react';
import { Home } from "./Home";

test('Home renders title', () => {
  render(<Home />);
  const title = screen.getByText("Popular Movies");
  expect(title).toBeInTheDocument();
});
