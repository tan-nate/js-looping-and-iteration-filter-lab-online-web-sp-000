// Code your solution in this file
function findMatching(array, choice) {
  return array.filter(function (name) { return name.toLowerCase() === choice.toLowerCase(); });
}
