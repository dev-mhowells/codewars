//You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const names = [];
const names1 = ["Peter"];
const names2 = ["Peter", "Jacob"];
const names3 = ["Peter", "Jacob", "Brian"];
const names4 = ["Peter", "Jacob", "Brian", "Simon"];
const names5 = [
  "Peter",
  "Jacob",
  "Brian",
  "Simon",
  "Peter",
  "Jacob",
  "Brian",
  "Simon",
];

function likes(names) {
  // names 4
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  // names 3
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  // names 2
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  // names 1
  else if (names[0]) {
    return `${names[0]} likes this`;
  }
  // names []
  else if (names.length < 1) {
    return "no one likes this";
  }
}

console.log(likes(names));
console.log(likes(names1));
console.log(likes(names2));
console.log(likes(names3));
console.log(likes(names4));
console.log(likes(names5));
