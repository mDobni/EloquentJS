// LOOPING A TRIANGLE
var str = '';

for (var i = 0; str.length <= 6; i++) {
  str += '#';
  console.log(str);
};

// FIZZBUZZ (in any number range)
var start = prompt('Pick starting point');
var end = prompt('Pick end point');

var fizzBuzz = function (number) {
    let c = number / 5;
    let b = number / 3;

  if (Number.isInteger(c) && Number.isInteger(b)){
   console.log('-> FizzBuzz');
  } else if (Number.isInteger(b)){
     console.log('-> Fizz');
  } else if (Number.isInteger(c)){
     console.log('-> Buzz');
  } else console.log(number);
};

do {
  fizzBuzz(start);
  start++;
}
while(start < end);

// CHESS BOARD
var size = prompt('Pick chessboard size. Input must be integer');
var char = '';
var line = '';

for (var i = 0; i <= size; i++) {
  if (i % 2 == 0) {
    char = '';
  } else {
    char = '#';
  };
    for (var k = 0; char.length < size; k++) {
    if (k % 2 == 0) {
        char += ' ';
      } else {
        char += '#';
        };
    };
  line += char;
  line += '\n';
  
};
console.log(line);

// MINIMUM
function min (one, two) {
  if (one > two) {
    return two;
  } else {
    return one;
  };
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// RECURSION
function isEven(int) {
  if(int >= 0) {
    if (int == 0) {
      return true;
    } else if (int == 1) {
      return false;
    } else {
      return isEven(int - 2);
    };
  } else if (int < 0) {
    return isEven(int + 2);
  };
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// BEAN COUNTING
function countBs(word) {
  var counter = 0; 
  for (i = 0; i <= word.length - 1; i++)
    if (word.charAt(i) === 'B') {
      counter++;
    };
  return counter;
};

function countChar(word, letter) {
   var counter = 0; 
  for (i = 0; i <= word.length - 1; i++)
    if (word.charAt(i) === letter) {
      counter++;
    };
  return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// THE SUM OF A RANGE
function range(start, end, step) {
  var array = [];
  if (step == undefined || 0) {step = 1};
  if (start > end && step > 0) {step = -1};  
  
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      array.push(i);
  	};
  } else {    
    for (i = start; i >= end; i += step) {
      array.push(i);
    };
  };
  
  return array;
};

function sum(arr) {
  var total = 0;
  for (i = 0; i <= arr.length -1; i++) {
    total += arr[i];
  };
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55