'use strict';

// Create an object with five properties: foo, bar, fum, quux, and spam.
// Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const obj = {
  'foo': 3,
  'bar': 4,
  'fum': 5,
  'quux': 6,
  'spam': 8,

};

for (let x in obj) {

  console.log(`Name: ${x} - Prop: ${obj[x]}`);
}
