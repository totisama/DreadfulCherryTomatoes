import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer";

test('Footer renders images correctly', () => {
  render(<Footer />);

  const logo = screen.getByAltText(/Dreadful logo/i);
  const apple = screen.getByAltText(/Apple button/i);
  const google = screen.getByAltText(/Google button/i);

  expect(logo).toBeInTheDocument();
  expect(apple).toBeInTheDocument();
  expect(google).toBeInTheDocument();
});

test('Footer renders text correctly', () => {
  render(<Footer />);

  const text = screen.getByText(/© Copyright 2022 Dreadful Tomatoes. All rights reserved./i);
  expect(text).toBeInTheDocument();
});
