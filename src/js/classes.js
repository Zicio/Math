const defaultTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Неверный формат имени');
    }
    if (!defaultTypes.includes(type)) {
      throw new Error('Неверный формат типа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export class MathChar extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
  }

  set stoned(valueStoned) {
    this._stoned = valueStoned;
  }

  get stoned() {
    return Boolean(this._stoned);
  }

  set attack(valueAttack) {
    this._attack = valueAttack;
  }

  get attack() {
    this._attack *= (1.1 - 0.1 * this.distance);
    this._attack = this.stoned ? this._attack - Math.log2(this.distance) * 5 : this._attack;
    if (this._attack < 0) {
      this._attack = 0;
    }
    return Math.round(this._attack);
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends MathChar {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.defence = 40;
  }
}

export class Daemon extends MathChar {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.defence = 25;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 10;
    this.defence = 40;
  }
}
