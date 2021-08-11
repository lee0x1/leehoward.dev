import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RecentPosts from './RecentPosts';

test('has correct header text', () => {
  render(<RecentPosts posts={1} />);
  // test is false positive s at the end of Post doesn't matter
  expect(screen.getByRole('heading')).toHaveTextContent('Recent Posts');
});

test('has one post in list', () => {
  render(<RecentPosts posts={1} />);

  const list = screen.getByRole('list');

  const { getAllByRole } = within(list);

  const items = getAllByRole('listitem');

  expect(items.length).toBe(1);
});
