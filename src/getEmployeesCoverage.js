const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const objects = (funcionario, animals, localization) => ({
  id: funcionario.id,
  fullName: `${funcionario.firstName} ${funcionario.lastName}`,
  species: animals.map((animal) => animal.name),
  locations: localization,
});

const getEmployeesCoverage = (employee) => {
  if (employee) {
    const ansatt = employees.find((person) => person.firstName === employee.name
    || person.lastName === employee.name || person.id === employee.id);

    if (ansatt) {
      const animals = ansatt.responsibleFor.map((index) => species
        .find((specie) => specie.id === index));
      const localization = animals.map((animal) => animal.location);
      return objects(ansatt, animals, localization);
    }
    throw new Error('Informações inválidas');
  }
  return employees.map((func) => {
    const animals = func.responsibleFor.map((index) => species
      .find((specie) => specie.id === index));
    const localization = animals.map((animal) => animal.location);
    return objects(func, animals, localization);
  });
};

module.exports = getEmployeesCoverage;
