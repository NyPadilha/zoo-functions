const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (employeeName === undefined ? {}
  : employees.find((name) => name.firstName === employeeName || name.lastName === employeeName));

module.exports = getEmployeeByName;
