"use strict";


function createCharacter (name, nickname, race, origin, attack, defense) {
  return {
    "name": `${name}`,
    "nickname": `${nickname}`,
    "race": `${race}`,
    "origin": `${origin}`,
    "attack": `${attack}`,
    "defense": `${defense}`,
    describe: function () {
      return `${name} is a ${race} from ${origin}.`;
    },
    evaluateFight: function (obj) {
      let dmgGiven = 0;
      let dmgReceived = 0;

      dmgGiven = this.attack - obj.defense;
      dmgReceived = obj.attack - this.defense;

      if (dmgGiven < 0)
      {
        dmgGiven = 0;
      }

      if (dmgReceived < 0)
      {
        dmgReceived = 0;
      }

      return `Your opponent takes ${dmgGiven} damage and you receive ${dmgReceived} damage`;
    }
  }
}

const first = createCharacter("Gandalf the White","gandalf","Wizard","Middle Earth",10,6);
const second = createCharacter("Rhonda the Black","rhonda","Witch","Middle Earth",1000,600);
const characters = [
  createCharacter("Gandalf the White","gandalf","Wizard","Middle Earth",10,6),
  createCharacter("Bilbo Baggings", "bilbo", "Hobbit", "The Shire" ,2,1 ),
  createCharacter("Frodo Baggings", "frodo", "Hobbit", "The Shire" ,3,2 ),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain" ,6,8 ),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm" ,8, 5),
  createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 500,500);
];

console.log(characters);

let newObj = characters.find() {

};

let newArr = characters.filter() {

};

let newArr = characters.filter() {

};
