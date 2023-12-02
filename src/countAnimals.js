const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  if (Object.keys(animal).length === 1) {
    return species.find((dyr) => dyr.name === animal.species).residents.length;
  }
  return species.find((dyr) => dyr.name === animal.species)
    .residents.filter((animals) => animals.sex === animal.sex).length;
};

module.exports = countAnimals;
