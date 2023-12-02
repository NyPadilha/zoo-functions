const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldest = species.find((specie) => specie.id === animal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return [oldest.name, oldest.sex, oldest.age];
};

module.exports = getOldestFromFirstSpecies;
