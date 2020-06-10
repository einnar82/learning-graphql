import Author from "../models/author.model";

const createAuthor = async (params) => {
  const author = new Author({
    ...params,
  });
  try {
    return author.save();
  } catch (error) {
    throw error;
  }
};

export { createAuthor };
