const handlerElephants = require('../src/handlerElephants');

const residents = [
  { name: 'Ilana', sex: 'female', age: 11 },
  { name: 'Orval', sex: 'male', age: 15 },
  { name: 'Bea', sex: 'female', age: 12 },
  { name: 'Jefferson', sex: 'male', age: 4 },
];

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants retorna undefined quando nenhum parametro é passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verfica se o parametro passado em handlerElephants é uma string e retorna "Parâmetro inválido, é necessário uma string" quando nao for uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verfica se com o argumento count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(residents.length);
  });
  it('Verfica se com o argumento names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(residents.map((elephant) => elephant.name));
  });
  it('Verfica se com o argumento averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length);
  });
  it('Verfica se com o argumento location retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verfica se com o argumento popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verfica se com o argumento availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});

// requisito 6, 7, 15
