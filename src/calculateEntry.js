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

module.exports = { calculateEntry, countEntrants };
