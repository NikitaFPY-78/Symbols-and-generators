import Team from "./class/team.js";
import Character from "./class/character.js";

const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};


const firstPlayer = new Character(...Object.values(char));
const secondPlayer = new Character(...Object.values(char));
const thirdPlayer = new Character(...Object.values(char));

const netologyTeam = new Team;

netologyTeam.addAll(firstPlayer, secondPlayer, thirdPlayer)

for (let member of netologyTeam) {
  console.log(member);
}


