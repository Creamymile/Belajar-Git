// NO 1 Write a code to check wheter the date is a weekend

function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 7;
}

const currentDate = new Date();

if (isWeekend(currentDate)) {
  console.log(`${currentDate.toDateString()} is a weekend `);
} else {
  console.log(`${currentDate.toDateString()} is not a weekend `);
}

// NO 2 Write a code to find GCD of two numbers -> use while

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const num1 = 48;
const num2 = 18;

const result = gcd(num1, num2);
console.log(`GCD of ${num1} and ${num2} is ${result}`);

// NO 3 Write a code to find LCM of two numbers using do while

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function findLCM(a, b) {
  let multiple = Math.max(a, b);
  do {
    multiple++;
  } while (multiple % a !== 0 || multiple % b !== 0);
  return multiple;
}

const num3 = 12;
const num4 = 18;

const result2 = findLCM(num3, num4);
console.log(`LCM of ${num3} and ${num4} is ${result}`);

// No 4 Write a code to find most common character from a string
function findMostCommonCharacter(inputString) {
  const charFrequency = {};

  // Count character frequencies
  for (const char of inputString) {
    if (char in charFrequency) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  let mostCommonChar = "";
  let maxFrequency = 0;

  // Find the character with the maximum frequency
  for (const char in charFrequency) {
    if (charFrequency[char] > maxFrequency) {
      maxFrequency = charFrequency[char];
      mostCommonChar = char;
    }
  }

  return mostCommonChar;
}

const input = "hello world";
const result3 = findMostCommonCharacter(input);
console.log(`The most common character in "${input}" is "${result3}".`);

// No 5 Write a code to sort a string alphabetically (with and without sort function)

function sortString(inputString) {
  const sortedArray = inputString.split("").sort();
  const sortedString = sortedArray.join("");
  return sortedString;
}

const input2 = "programming";
const sortedWithSort = sortString(input2);
console.log(`Sorted using sort: ${sortedWithSort}`);
//

function sortStr(inputString) {
  const charArray = inputString.split("");
  for (let i = 0; i < charArray.length - 1; i++) {
    for (let j = i + 1; j < charArray.length; j++) {
      if (charArray[i] > charArray[j]) {
        const temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
      }
    }
  }
  const sortedString = charArray.join("");
  return sortedString;
}

const input4 = "programming";
const sortedManually = sortStr(input4);
console.log(`Sorted without sort: ${sortedManually}`);

// No 6 write a code to get minimum date from array of dates

function getMinimumDate(dateArray) {
  return new Date(Math.min.apply(null, dateArray));
}

const dates = [
  new Date("2023-08-10"),
  new Date("2023-08-12"),
  new Date("2023-08-08"),
  new Date("2023-08-15"),
  new Date("2023-08-05"),
];

const minDate = getMinimumDate(dates);
console.log("Minimum date:", minDate.toDateString());

// No 7 Write a code that calculates the sum of all elements of a two dimensional array

function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }

  return sum;
}

const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sum = calculateSum(twoDArray);
console.log(`The result is ${sum} `);

// EXERCISE 2
// No 1 Write a code to find the longest common prefix string amongst an array of strings
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(commonPrefix) !== 0) {
      commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
      if (commonPrefix === "") {
        return "";
      }
    }
  }

  return commonPrefix;
}

const strings = ["flower", "flow", "flight"];
const res = longestCommonPrefix(strings);
console.log("Longest common prefix:", res); // Result = fl

// No 2 Write a code that copies the first half of an array. With an odd number of array elemnts, the middle element should belong to the first half

function copyFirstHalf(array) {
  const middleIndex = Math.floor(array.length / 2);
  return array.slice(0, middleIndex + 1);
}

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = copyFirstHalf(originalArray);

console.log("Original Array:", originalArray);
console.log("Copied First Half", copiedArray);
// Result = 1, 2, 3

// No 3 Write a code to get the number of days in a month

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const year = 2023;
const month = 4; // Bulan mei

const daysInMonth = getDaysInMonth(year, month);
console.log(`Number of days in ${month + 1}/${year} : ${daysInMonth}`);

// No 4 Write a code to count the number of days passed since the beginning of the year
function daysPassedSinceBeginning(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const timeDiff = date - startOfYear;
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysPassed;
}

const currentDate2 = new Date();
const daysPassed = daysPassedSinceBeginning(currentDate2);
console.log(
  `Number of days passed since the beginning of year is ${daysPassed}`
);
// No 5 Write a code to calculate age

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const birthDate = "2001-10-27";
const age = calculateAge(birthDate);
console.log(`Age: ${age}`);
