'use strict';

function validateHello(greetings) {
  const helloArray = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj','czesc',];
  const greetingsToLow = greetings.toLowerCase();
  for (const hello of helloArray) {
    const res = greetingsToLow.indexOf(hello);
    if (res !== -1) return true;
  }
  return false;
}
