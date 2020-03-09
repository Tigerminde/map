import Character from './base';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
