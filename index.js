// Code your solution in this file
function findMatching(array, choice) {
  array.filter(function (name) { return name.toLowerCase() === choice.toLowerCase(); });
}