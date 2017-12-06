"use strict";


function createCharacter (name, nickname, race, origin, attack, defense, weapon) {
  return {
    "name": `${name}`,
    "nickname": `${nickname}`,
    "race": `${race}`,
    "origin": `${origin}`,
    "attack": `${attack}`,
    "defense": `${defense}`,
    describe: function () {
      return `${name} is a ${race} from ${origin} who uses ${weapon}`;
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
  createCharacter("Gandalf the White","gandalf","Wizard","Middle Earth",10,6, "wizard staff"),
  createCharacter("Bilbo Baggings", "bilbo", "Hobbit", "The Shire" ,2,1,"THE RING" ),
  createCharacter("Frodo Baggings", "frodo", "Hobbit", "The Shire" ,3,2, "String Barrowblade"),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain" ,6,8, "Anduril"),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm" ,8, 5, "Bow and Arrow"),
  createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 500,500, "Hadhafang")
];

//console.log(characters);

let newObj = characters.find(function (n){
    return n.nickname === "aragorn";
});


//console.log(newObj.describe());

let hobbits = characters.filter(function (n) {
  return n.race === "Hobbit";
});

//console.log(hobbits);
let strongAttackers = characters.filter(function (n) {
  return n.attack > 5;
})

console.log(strongAttackers);
