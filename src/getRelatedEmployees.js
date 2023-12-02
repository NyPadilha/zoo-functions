const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.map((employee) => employee.managers)
  .reduce((acc, index) => acc.concat(index), []).some((manager) => manager === id);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
