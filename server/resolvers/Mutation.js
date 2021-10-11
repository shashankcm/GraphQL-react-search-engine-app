const { v4 } = require("uuid");
const Mutation = {
  addAnimal: (
    parent,
    {
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onScale,
      category,
    },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onScale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => animal.id === id);
    if (index !== -1) {
      animals.splice(index, 1);
      return true;
    } else {
      return false;
    }
  },
};

module.exports = Mutation;
