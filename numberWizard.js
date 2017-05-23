alert('Specify number range and guess the number within. You have 5 attempts.');
var min = prompt('Choose the lower number');
var max = prompt('Choose the upper number');

const randomNumber = Math.round(Math.random() * (max - min + 1) + min);

const result = {
  attempts: 1,
  number: randomNumber
};

function message() {
  console.log(result);
  alert('Winner!');
}

function end() {
  throw message();
}

function numberWizard(randomNumber) {

 
  for (var i = 1; i <= 5; i++) {
     var input = prompt('Guess the number');
   
     input == randomNumber
     ? end()
     : input > randomNumber
       ? alert('Number you seek is lower')
       : alert('Number you seek is higher') ;
       result.attempts += i;
    };
}
numberWizard(randomNumber);

