import * as classes from '../classes';
import Character from '../classes';

test('class Daemon with nonintegral attack and without stoned', () => {
  const daemon = new classes.Daemon('Bob', 2);
  daemon.stoned = 0;
  daemon.attack = 100.22;
  expect(daemon.stoned).toBe(false);
  expect(daemon.attack).toBe(90);
});

test('class Magician with negative attack and with stoned', () => {
  const mage = new classes.Magician('Bob', 5);
  mage.stoned = 1;
  mage.attack = 1;
  expect(mage.stoned).toBe(true);
  expect(mage.attack).toBe(0);
});

test('throws on name', () => {
  expect(() => new classes.Swordsman('B')).toThrowError(new Error('Неверный формат имени'));
  expect(() => new classes.Swordsman('Bobanecvoer')).toThrowError(new Error('Неверный формат имени'));
});

test('throws on type', () => {
  expect(() => new Character('Bob', 'Sworde')).toThrowError(new Error('Неверный формат типа'));
});

test('class Bowerman', () => {
  expect(new classes.Bowerman('Bob')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowman',
  });
});

test('class Swordsman', () => {
  expect(new classes.Swordsman('Bob')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Swordsman',
  });
});

test('class Undead', () => {
  expect(new classes.Undead('Bob')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Undead',
  });
});

test('class Zombie', () => {
  expect(new classes.Zombie('Bob')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Zombie',
  });
});
