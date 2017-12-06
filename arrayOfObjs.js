'use strict';

// Create 3-5 objects, each with a name and a jobTitle.
// Use people you know, or characters from fiction,
//  or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

//factory functions
function gimmeObj (name, jobTitle) {
  return {
    name: `${name}`,
    title: `${jobTitle}`
  }
}

const obj1 = gimmeObj("Vernon", "Wizard");
const obj2 = gimmeObj("Alder", "King");
const obj3 = gimmeObj("Trump", "President");

const arr = [obj1, obj2, obj3];

for (let x in arr){
  console.log(`${arr[x]["name"]} --- ${arr[x]["title"]}`);
}
