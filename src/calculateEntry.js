const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter((person) => person.age < 18).length,
  adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
  senior: entrants.filter((person) => person.age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  const entradas = countEntrants(entrants);
  return (entradas.child * prices.child) + (entradas.adult * prices.adult)
    + (entradas.senior * prices.senior);
};

console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
