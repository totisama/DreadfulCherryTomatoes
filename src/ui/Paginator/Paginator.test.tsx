import { render, screen } from '@testing-library/react';
import { Paginator } from "./Paginator";

test('Paginator renders left and right buttons', () => {
  render(<Paginator currentPage={0} totalPages={3} handlePagination={() => { }} />);

  const leftButton = screen.getByAltText("Left button");
  const rightButton = screen.getByAltText("Right button");

  expect(rightButton).toBeInTheDocument();
  expect(leftButton).toBeInTheDocument();
});

test('Paginator renders correct amount of pages buttons', () => {
  const { container } = render(<Paginator currentPage={0} totalPages={3} handlePagination={() => { }} />);

  const pageButtons = container.getElementsByClassName('page');
  expect(pageButtons.length).toBe(3);

  const activeButtons = container.getElementsByClassName('active');
  expect(activeButtons.length).toBe(1);
});

test('Paginator renders null if totalpage is 0', () => {
  const { container } = render(<Paginator currentPage={0} totalPages={0} handlePagination={() => { }} />);

  const paginator = container.getElementsByClassName('paginator');
  expect(paginator.length).toBe(0);
});
