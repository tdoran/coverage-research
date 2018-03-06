var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(1);
  var expected = 1;
  t.equal(actual, expected, 'Should return 1 when given 1');
  t.end();
});

test('Testing fizzbuzz return value', function(t){
  var actual = fizzbuzz(2);
  var expected = 2;
  t.equal(actual, expected, 'Should return 2 when given 2');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(3);
  var expected = 'Fizz';
  t.equal(actual, expected, 'Should return Fizz when given 3');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(5);
  var expected = 'Buzz';
  t.equal(actual, expected, 'Should return Buzz when given 5');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(15);
  var expected = 'FizzBuzz';
  t.equal(actual, expected, 'Should return FizzBuzz when given 15');
  t.end();
});
