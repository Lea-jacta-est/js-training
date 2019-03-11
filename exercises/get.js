'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
function get (entry){
  switch (entry){
    case entry === num : 
      return 42;
      break;
    case bool :
      return true;
      break;
    case str:
      return 'some text';
      break;
    case log: 
      return console.log;
      break;
    default:
      return undefined;

  }
}

const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
