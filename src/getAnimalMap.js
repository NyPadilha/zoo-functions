const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getAnimalsByLocal = (local) => species.filter((i) => i.location === local);

const location = ['NE', 'NW', 'SE', 'SW'];

const sortedByLocal = location.reduce((acc, curr) => {
  acc[curr] = getAnimalsByLocal(curr).map((animal) => animal.name);
  return acc;
}, {});

const sortedBy = (parameters, animal) => {
  let value;
  if (parameters === 'onlyNames') value = animal.residents.map((dyr) => dyr.name);
  if (parameters === 'sort') value = animal.residents.map((dyr) => dyr.name).sort();
  if (parameters.par === 'sex') {
    value = animal.residents.filter((dyr) => dyr.sex === parameters.sex).map((a) => a.name);
  }
  if (parameters.par === 'sortBySex') {
    value = animal.residents.filter((dyr) => dyr.sex === parameters.sex).map((a) => a.name).sort();
  }
  return value;
};

const sortedByLocalAndName = (parameters) => location.reduce((acc, curr) => {
  acc[curr] = getAnimalsByLocal(curr).map((animal) => {
    const animals = {};
    animals[animal.name] = sortedBy(parameters, animal);
    return animals;
  });
  return acc;
}, {});

const temSex = (options) => {
  if (options.sorted && options.sex) {
    return sortedByLocalAndName({ par: 'sortBySex',
      sex: options.sex });
  }
  if (options.sex) return sortedByLocalAndName({ par: 'sex', sex: options.sex });
};

const temName = (options) => {
  if (options.sex) return temSex(options);
  if (options.sorted) return sortedByLocalAndName('sort');
  if (options.includeNames) return sortedByLocalAndName('onlyNames');
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return sortedByLocal;
  if (options.includeNames) return temName(options);
};

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NE[0]);
// console.log(getAnimalsByLocal('NE').map((animal) => animal.residents.map((dyr) => dyr.name).sort()))

module.exports = getAnimalMap;
