'use strict';

function arrayMadness(a, b) {
  return a.reduce(((acc, el) => acc + el**2), 0) > b.reduce(((acc, el) => acc + el**3), 0) ? true : false;
}
