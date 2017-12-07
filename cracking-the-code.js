'use strict';
// if (splitStrings[i][0] === 'a'){
//   splitStrings[i] = splitStrings[i][cipher.a-1];
// }
// else if (splitStrings[i][0] === 'b'){
//   splitStrings[i] = splitStrings[i][cipher.b-1];
// }
// else if (splitStrings[i][0] === 'c'){
//   splitStrings[i] = splitStrings[i][cipher.c-1];
// }
// else if (splitStrings[i][0] === 'd'){
//   splitStrings[i] = splitStrings[i][cipher.d-1];
// }
// else {
//   splitStrings[i] = ' ';
// }
const cipher = {
  c : 4,
  a : 2,
  b : 3,
  d : 5,
};

// for -- looped over split strings: ter, foo, bar, rrr.

//for (x in cipher)
//--- x(key) === splitStrings[i][0]
//  if true -> do this -> splitStrings[i] = splitStrings[i][cipher.a-1];
// break
function decode(input) {
  //Check for five letter words in string
  //Split string into array divided by a space
  const splitStrings = input.split(' ');
  // console.log(splitString);
  //Iterate over each index in the array
  let found = false;
  for (let i = 0; i < splitStrings.length; i++){
    for (let x in cipher){ // a b c d --- alligator
      if (x === splitStrings[i][0]) {
        found = true;
        splitStrings[i] = splitStrings[i][cipher[x]-1];
      }
    }
    //check if the IF statement ran in our for loop
    if (!found) {
      splitStrings[i] = ' ';
    }
    //resets!
    found = false;

  }
  const decodedString = splitStrings.join('');
  //console.log(splitStrings);
  return decodedString;

}

//second solution - using objects
//Check for five letter words in string
//Split string into array divided by a space
//ex of words: bae, boo, hun, lol.
//loop through words....
    //if the firstlletter of the word we are on
    //bae -> b matches a key in cipher aka it cypher[firstLetter] doesnt
    //give us back the undefined object
        //change string to one letter that corresponds to cipher
    //else - when it doesnt exist aka undefined
        //change string to space
function dosdecode(input) {

  const splitStrings = input.split(' ');
  let firstLetter = "";
  let decodedString = "";

  for (let i = 0; i < splitStrings.length; i++){

    firstLetter = cipher[splitStrings[i][0]];

    if (cipher[firstLetter] !== undefined) {
      splitStrings[i] = splitStrings[i][cipher[firstLetter]-1];
    }

    else {
      splitStrings[i] = " ";
    }
  }

  decodedString = splitStrings.join('');

  return decodedString;
}

console.log(decode('craft block argon meter bells brown croon droop'));
console.log(dosdecode('craft block argon meter bells brown croon droop'));
