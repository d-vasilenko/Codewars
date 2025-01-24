'use strict';

function all( arr, fun ) {
  
  const tempArray = [];

  for (const el of arr) {
    tempArray.push(fun(el));
  }

  if (tempArray.includes(false)) return false;
  
  return true;

}

console.log(all([1, 2, 3, 4, 5], function(v) { return v < 9; }));
console.log(all([1, 2, 3, 4, 5], function(v) { return v > 9; }));
console.log(all([], function(v) { return v > 9; }));
console.log(all([1, 3, 1, 5, 7], function(v) { return v % 2 !== 0; }));
console.log(all([1, 3, 1, 5, 7], function(v) { return v % 2 === 0; }));