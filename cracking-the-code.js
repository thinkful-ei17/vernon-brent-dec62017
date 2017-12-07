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


console.log(decode('craft block argon meter bells brown croon droop'));
