// No 1. Write a code to display the multiplication table of a given integer

const number = 5 ;

console.log(`Multiplication Table for ${number}`);

for (let i = 1; i <= 10; i++) {
  const product = number * i;
  console.log(`${number} x ${i} = ${product}`);
}

// No 2. Write a code to check wheter a string is a palindrome or not

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word.toLowerCase() === reversedWord.toLowerCase();
  }
  
  const reviver = ("reviver :");
  
  if (isPalindrome(reviver)) {
    console.log("The word is a palindrome.");
  } else {
    console.log("The word is not a palindrome.");
  }

  // No 3. write a code to convert centimeter to kilometer

  function centimetersToKilometers(centimeters) {
    const kilometers = centimeters / 100000;
    return kilometers;
  }
  
  const inputCentimeters = ("50000");
  
  const result = centimetersToKilometers(50000);
  
  console.log(`${inputCentimeters} centimeters is equal to ${result} kilometers.`);

  // No 4. Write a code to format number as currency (IDR)

  function formatCurrency(number) {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    });
  
    return formatter.format(number);
  }
  
  const inputNumber = ("500000");
  
  const formattedCurrency = formatCurrency(inputNumber);
  
  console.log(`Formatted currency: ${formattedCurrency}`);
  
  // No 5. Write a code to remove the first occurrence of a given "search string" from a string

  function removeFirstOccurrence(str, search) {
    const index = str.indexOf(search);
    if (index !== -1) {
      const length = search.length;
      return str.slice(0, index) + str.slice(index + length);
    }
    return str;
  }
  
  const originalString = ("Hebat");
  const searchString = ("He");
  
  const modifiedString = removeFirstOccurrence(originalString, searchString);
  
  console.log(`Modified string: ${modifiedString}`);

  // No 6. Write a code to capitalize the first letter of each word in a string

  function capitalizeString(str) {
    const words = str.split(" ");
    
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    
    return capitalizedWords.join(" ");
  }
  
  const inputString = ("sangat hebat");
  
  const capitalizedString = capitalizeString(inputString);
  
  console.log(`Capitalized string: ${capitalizedString}`);

  // No 7. Write a code to reverse a string

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const inputString2 = ("Amazing");
  
  const reversedString = reverseString(inputString2);
  
  console.log(`Reversed string: ${reversedString}`);

  // Exercise 2 No. 1 Write a code to swap the case of each character from string

  function swapCase(str) {
    let swappedString = "";
    for (let i = 0; i < str.length; i++) {
      const currentChar = str.charAt(i);
      if (currentChar === currentChar.toUpperCase()) {
        swappedString += currentChar.toLowerCase();
      } else {
        swappedString += currentChar.toUpperCase();
      }
    }
    return swappedString;
  }
  
  const inputString3 = (" sO aMazing");
  
  const swappedString = swapCase(inputString3);
  
  console.log(`Swapped string: ${swappedString}`);

  // Exercise 2 No. 2 Write a code to find the largest of two given integers

  function findLargest(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  const inputNum1 = ("5");
  const inputNum2 = ("9");
  
  const largestNumber = findLargest(inputNum1, inputNum2);
  
  console.log(`The largest number is : ${largestNumber}`);

  // Exercise 2 No. 3 Write a conditional statement to sort three numbers

  function sortNumbers(num5, num6, num7) {
    let sortedNumbers;
  
    if (num5 <= num6 && num5 <= num7) {
      sortedNumbers = [num5, Math.min(num6, num7), Math.max(num6, num7)];
    } else if (num6 <= num5 && num6 <= num7) {
      sortedNumbers = [num6, Math.min(num5, num7), Math.max(num5, num7)];
    } else {
      sortedNumbers = [num7, Math.min(num5, num6), Math.max(num5, num7)];
    }
  
    return sortedNumbers;
  }
  
  const inputNum5 = parseFloat ("10");
  const inputNum6 = parseFloat ("5");
  const inputNum7 = parseFloat ("8");
  
  const sortedArray = sortNumbers(inputNum5, inputNum6, inputNum7);
  
  console.log(`Sorted numbers: ${sortedArray.join(", ")}`);

  // Exercise 2 No 4 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

  function showDataType(input) {
    const dataType = typeof input;
  
    if (dataType === "string") {
      return 1;
    } else if (dataType === "number") {
      return 2;
    } else {
      return 3;
    }
  }

  console.log(showDataType("AMAZING"));
  console.log(showDataType(42));
  console.log(showDataType(true));
  
  // Exercise 2 No 5 Write a code to change every letter a into * from a string of input

  function replaceLetterA(inputString) {
   
    const replacedString = inputString.replace(/a/g, '*');
    return replacedString;
  }

    const input = "This is an example with some letter a in it.";
    const replacedOutput = replaceLetterA(input);
    
    console.log(replacedOutput);