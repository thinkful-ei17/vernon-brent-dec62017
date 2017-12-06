'use strict';
const cipher = {
  a : 2,
  b : 3,
  c : 4,
  d : 5,
};


function decode(input) {
  //Check for five letter words in string
  //Split string into array divided by a space
  const splitStrings = input.split(' ');
  // console.log(splitString);
  //Iterate over each index in the array
  for (let i = 0; i < splitStrings.length; i++){
    if (splitStrings[i][0] === 'a'){
      splitStrings[i] = splitStrings[i][cipher.a-1];
    }
    else if (splitStrings[i][0] === 'b'){
      splitStrings[i] = splitStrings[i][cipher.b-1];
    }
    else if (splitStrings[i][0] === 'c'){
      splitStrings[i] = splitStrings[i][cipher.c-1];
    } 
    else if (splitStrings[i][0] === 'd'){
      splitStrings[i] = splitStrings[i][cipher.d-1];
    }
    else {
      splitStrings[i] = ' ';
    }
  }
  const decodedString = splitStrings.join('');
  //console.log(splitStrings);
  return decodedString;

}


console.log(decode('craft block argon meter bells brown croon droop'));