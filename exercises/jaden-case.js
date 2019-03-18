'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (str) {
    let array = str.split("");
    for (let i=0; i<array.length; i++){
      if (array[i] === " "){
      array[i+1] = array[i+1].toUpperCase();
      }
    }
    array[0] = array[0].toUpperCase();
    let string = array.join('');
    return string;
  };

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('il fait beau'), 'Il Fait Beau')

//assert.fail('You must write your own tests')
// End of tests */
