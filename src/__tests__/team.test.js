import Team from "../js/class/team";
import Character from "../js/class/character";

test('add in team', () => {

  const firstPlayer = new Character("Гэндальф", "Magician", 100, 1, 40, 40);

  const netologyTeam = new Team;

  netologyTeam.add(firstPlayer)

  expect(() => {
    netologyTeam.add(firstPlayer);
  }).toThrow('Такой игрок уже есть в комаде!');
});


test('add multiple players to a team', () => {
  const firstPlayer = new Character("Гэндальф", "Magician", 100, 1, 40, 40);
  const secondPlayer = new Character("Гэндальф Белый", "Magician", 100, 1, 40, 40);

  const netologyTeam = new Team;

  netologyTeam.addAll(firstPlayer, secondPlayer, secondPlayer)

  expect(netologyTeam.members).toBeInstanceOf(Set);
});

test('team returns a list', () => {
  const firstPlayer = new Character("Гэндальф", "Magician", 100, 1, 40, 40);
  const secondPlayer = new Character("Гэндальф Белый", "Magician", 100, 1, 40, 40);

  const netologyTeam = new Team;

  netologyTeam.addAll(firstPlayer, secondPlayer, secondPlayer)

  expect(netologyTeam.toArray()).toBeInstanceOf(Array);
});

describe('Team class', () => {
  let team;

  beforeEach(() => {
    team = new Team();
    team.members.add('Member 1');
    team.members.add('Member 2');
  });

  test('should iterate over team members correctly', () => {
    const membersArray = Array.from(team);

    expect(membersArray).toEqual(['Member 1', 'Member 2']);
  });

  test('should be able to iterate an empty team', () => {
    const emptyTeam = new Team();
    const membersArray = Array.from(emptyTeam);

    expect(membersArray).toEqual([]);
  });
});

