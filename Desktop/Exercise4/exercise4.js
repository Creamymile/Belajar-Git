// Exercise 1

function Triangle(height) {
    for (let i = 1; i <= height; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += j.toString().padStart(2, '0') + ' ';
      }
      console.log(pattern.trim());
    }
  }

Triangle(5);

// Exercise 2

function fizzBuzzLoop(limit) {
    for (let i = 1; i <= limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }

  fizzBuzzLoop(15);

  // Exercise 3

  // Exercise 4

  function removeOddNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers
  }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = removeOddNumbers(numbers);

    console.log('Even Numbers:', evenNumbers);

  // Exercise 5

  function splitStringIntoWords(str){
    const words = str.split ('');
    return words;
  }

    const sentence = 'Halo yang disana';
    const words = splitStringIntoWords(sentence);

    console.log('Words', words);