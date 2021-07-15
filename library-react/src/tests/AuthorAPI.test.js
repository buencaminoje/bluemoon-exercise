import '@testing-library/jest-dom/extend-expect';
import { getAuthors, createAuthor, updateAuthor, deleteAuthor } from '../components/author/AuthorAPI';

test('Check Author API Functions', () => {
  expect(typeof getAuthors === 'function').toBe(true);
  expect(typeof createAuthor === 'function').toBe(true);
  expect(typeof updateAuthor === 'function').toBe(true);
  expect(typeof deleteAuthor === 'function').toBe(true);
});
