function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (i = start; i <= end; i++) {
      start + step;
      array.push(i);
    }
  }
  else {
    for (i = start; i >= end; i--) {
      start - step;
      array.push(i);
    }
  }
  return array;
}

function sum(arraynum) {
  let sum = 0;
  for(i=0;i<arraynum.length;i++){
    sum+=arraynum[i];
  }
  return sum;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
