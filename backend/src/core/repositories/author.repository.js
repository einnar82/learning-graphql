import Author from "../models/author.model";

const createAuthor = async (params) => {
  const author = new Author({
    ...params,
  });
  try {
    return await author.save();
  } catch (error) {
    throw error;
  }
};

const allAuthors = async () => {
  try {
    return await Author.find({});
  } catch (error) {
    throw error;
  }
};

const findAuthor = async (id) => {
  try {
    const author = await Author.findById(id);
    return author;
  } catch (error) {
    throw error;
  }
};

export { createAuthor, allAuthors, findAuthor };
