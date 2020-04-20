// let bandNumber = 1
//
// const takeNumber = function (bandName) {
// /*
// Write your awesome code here. See comments
// below for what should be returned.
// */
//
// return `${bandNumber++}. ${bandName}`;
// }
//
// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console
//
// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
//
//

const hamburger = {
  name: "Hamburger",
  type: "beef",
  cooked: false,
};
const zucchini = {
  name: "Zucchini",
  type: "vegetable",
  cooked: false,
};
const chickenBreast = {
  name: "Chicken Breast",
  type: "chicken",
  cooked: false,
};
const corn = {
  name: "Corn",
  type: "vegetable",
  cooked: false,
};
const steak = {
  name: "Steak",
  type: "beef",
  cooked: false,
};

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);

    }
    //iterate over foods array and grill each item
for(let i = 0; i<foods.length; i++){
  console.log(foods[i]);
  grill(foods[i]);
}
    // grill(steak);

    // for (let item of foods) {
      // grill(item);
    // }
    // console.log(cookedFood);
// foods.forEach(grill);
console.log("Cooked Food", cookedFood);  

