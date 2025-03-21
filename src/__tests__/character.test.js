import Character from "../js/class/character";


describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character('Alice', 'Daemon', 100, 1, 40, 40);
  });

  test('Object properties Character', () => {
    const correct = {
      name: 'Alice',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 40,
      defence: 40,
    }
    expect(character).toEqual(correct);
  });

  test('correct level up', () => {
    const correct = {
      name: 'Alice',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    }
    character.attack = 10;
    character.defence = 40;
    character.levelUp();
    expect(character).toEqual(correct);
  });

  test('correct damage', () => {
    const correct = {
      name: 'Alice',
      type: 'Daemon',
      health: 85,
      level: 1,
      attack: 40,
      defence: 40,
    }
    character.damage(25);
    expect(character).toEqual(correct);
  });

  test('should throw an error when trying to level up a dead Daemon', () => {
    character.health = 0;
    expect(() => {
      character.levelUp();
    }).toThrow('Нельзя повысить левел умершего');
  });

  test('should throw an error when trying to attack a dead Daemon', () => {
    character.health = 0;
    expect(() => {
      character.damage(14);
    }).toThrow('Нельзя атаковать умершего');
  });

  test('should throw an error when the name is not correct', () => {
    expect(() => {
      new Character(0, 'Daemon');
    }).toThrow('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.');
  });

  test('should throw an error when the type is not valid', () => {
    expect(() => {
      new Character('Daemon', 'Daemon!!!!!!!!!!!!1');
    }).toThrow('Не верный тип');
  });
});