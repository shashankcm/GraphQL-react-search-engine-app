const Animal = {
  // parent, args, ctx
  category: (parent, args, { categories }) =>
    categories.find((category) => category.id === parent.category),
};

module.exports = Animal;
