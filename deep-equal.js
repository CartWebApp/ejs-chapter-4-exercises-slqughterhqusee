function deepEqual(value, reference) {
  if (value === reference){
  return `true`;
  }
  else if (value == reference){
    return `true`;
  }
  else {
    return `false`;
  }
};






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
