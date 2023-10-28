import { render, screen } from '@testing-library/react';
import { Search } from './Search';

test('Search renders input', () => {
  render(<Search handleSearch={() => { }} />);

  const input = screen.getByPlaceholderText('Title')
  expect(input).toBeInTheDocument();
});