const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getAnimalsByLocal = (local) => species.filter((i) => i.location === local);

const location = ['NE', 'NW', 'SE', 'SW'];

const sortedByLocal = location.reduce((acc, curr) => {
    acc[curr] = getAnimalsByLocal(curr).map((animal) => animal.name);
    return acc;
  }, {});

const sortedByLocalAndName = (parameters) => location.reduce((acc, curr) => {
  let value;
  acc[curr] = getAnimalsByLocal(curr).map((animal) => {
    if (!parameters) value = animal.residents.map((dyr) => dyr.name);
    if (parameters === 'sort') value = animal.residents.map((dyr) => dyr.name).sort();
    if (parameters === 'sexFemale') value = animal.residents.filter((dyr) => dyr.sex === 'female').map((a) => a.name);
    if (parameters === 'sexMale') value = animal.residents.filter((dyr) => dyr.sex === 'male').map((a) => a.name);
    if (parameters === 'sexFemaleSort') value = animal.residents.filter((dyr) => dyr.sex === 'female').map((a) => a.name).sort();
    if (parameters === 'sexMaleSort') value = animal.residents.filter((dyr) => dyr.sex === 'male').map((a) => a.name).sort();

    const animals = {};
    animals[animal.name] = value
    return animals;
  });
  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return sortedByLocal;

  if (options.sorted && options.sex === 'female') return sortedByLocalAndName('sexFemaleSort');
  if (options.sorted && options.sex === 'male') return sortedByLocalAndName('sexMaleSort');
  

  if (options.sorted) return sortedByLocalAndName('sort');

  if (options.sex === 'female') return sortedByLocalAndName('sexFemale');
  else if (options.sex === 'male') return sortedByLocalAndName('sexMale');

  if (options.includeNames) return sortedByLocalAndName();
};

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NE[0]);
//console.log(getAnimalsByLocal('NE').map((animal) => animal.residents.map((dyr) => dyr.name).sort()))

module.exports = getAnimalMap;
