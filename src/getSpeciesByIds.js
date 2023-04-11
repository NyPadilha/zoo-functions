const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (!ids.length ? []
  : species.filter((specie) => ids.includes(specie.id)));

module.exports = getSpeciesByIds;
