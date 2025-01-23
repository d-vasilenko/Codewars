'use strict';

function integrate(coefficient, exponent) {
  const exp = exponent + 1;
  const integral = coefficient / exp;
  return `${integral}x^${exp}`;
}

console.log(integrate(3, 2));