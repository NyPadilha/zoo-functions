const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const createSchedule = (weekDay) => {
  const officeH = hours[`${weekDay}`];
  const officeHour = `Open from ${officeH.open}am until ${officeH.close}pm`;
  return {
    officeHour: (officeH.open && officeH.close) === 0 ? 'CLOSED' : officeHour,
    exhibition: (officeH.open && officeH.close) === 0 ? 'The zoo will be closed!'
      : species.map((animal) => animal.availability.includes(weekDay)
      && animal.name).filter((dyr) => dyr !== false),
  };
};

const getSchedule = (scheduleTarget) => {
  const isAnimal = species.find((animal) => animal.name === scheduleTarget);
  const isDay = Object.keys(hours).some((weekDay) => weekDay === scheduleTarget);
  const schedule = {};

  if (isAnimal) return isAnimal.availability;
  if (isDay) {
    schedule[scheduleTarget] = createSchedule(scheduleTarget);
    return schedule;
  }
  Object.keys(hours).forEach((day) => {
    schedule[day] = createSchedule(day);
  });
  return schedule;
};

module.exports = getSchedule;
