import { useState } from 'react';
import { Book } from '../model/Book';

export const useBookViewModel = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'Book One', author: 'Author One', description: 'Description of Book One' },
    { id: 2, title: 'Book Two', author: 'Author Two', description: 'Description of Book Two' },
    { id: 3, title: 'Book Three', author: 'Author Three', description: 'Description of Book Three' },
    { id: 4, title: 'Book Four', author: 'Author Four', description: 'Description of Book Four' },
    { id: 5, title: 'Book Five', author: 'Author Five', description: 'Description of Book Five' },
    { id: 6, title: 'Book Six', author: 'Author Six', description: 'Description of Book Six' },
    { id: 7, title: 'Book Seven', author: 'Author Seven', description: 'Description of Book Seven' },
    { id: 8, title: 'Book Eight', author: 'Author Eight', description: 'Description of Book Eight' },
  ]);

  return { books };
};
