import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Movie } from "./Movie";

global.structuredClone = jest.fn(val => {
  return JSON.parse(JSON.stringify(val));
});

const movie = {
  "title": "American History X",
  "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
  "images": {
    "posterArt": {
      "url": "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.jpg",
      "width": 497,
      "height": 736
    }
  },
  "releaseYear": 1998
};

test('Movie renders movie information', () => {
  render(<Movie movie={movie} />);

  const movieEl = screen.getByText("American History X");
  expect(movieEl).toBeInTheDocument();
});

test('Hover shows more information', () => {
  const { container } = render(<Movie movie={movie} />);

  const movieEl = container.firstChild as HTMLElement;

  expect(movieEl).toHaveClass('movie');

  userEvent.hover(movieEl);

  const extraElements = container.getElementsByClassName('extra');
  expect(extraElements[0]).toBeInTheDocument();
  expect(extraElements.length).toBe(1);

  const yearText = screen.getByText('1998');
  expect(yearText).toBeInTheDocument();
});
