import Book from "../models/book.model";

const createBook = async (params) => {
  const book = new Book({
    ...params,
  });
  try {
    return await book.save();
  } catch (error) {
    throw error;
  }
};

const allBooks = async () => {
  try {
    return await Book.find({});
  } catch (error) {
    throw error;
  }
};

export { createBook, allBooks };
