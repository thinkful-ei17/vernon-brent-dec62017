'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;

  }
};

console.log(loaf.hydration());

//Fill in the body of the method to return the hydration of the loaf
//(the water divided by the flour multiplied by 100).
//Call the hydration method and use console.log to print the result.
