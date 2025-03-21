export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = this.isNameValid(name);
    this.type = this.isTypeValid(type);
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  isNameValid(name) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 20) {
      return name;
    } else {
      throw new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.');
    }
  }

  isTypeValid(type) {
    const checklist = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (checklist.includes(type)) {
      return type
    } else {
      throw new Error('Не верный тип')
    }
  }

  levelUp(){
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего')
    }
  }

  damage(points){
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100)
    } else {
      throw new Error('Нельзя атаковать умершего')
    }
  }
}