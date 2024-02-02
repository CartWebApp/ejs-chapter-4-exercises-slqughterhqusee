function reverseArray(arr) {
  const array = [];
  for (i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}

function reverseArrayInPlace(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  for (i = arr.length / 2 - 1; i >= 0; i--) {
    arr.shift();
  }
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
arrayvalue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]