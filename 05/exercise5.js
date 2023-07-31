// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function)

function getArrayStatsWithSort(arr){
    arr.sort((a,b) => a -b );
    const lowest = arr[0];
    const highest = arr[arr.length -1];
    const average = arr.reduce((total, num) => total + num, 0) / arr.length;

    return { lowest, highest, average};
}

    const numbers = [ 5, 2, 8, 1, 9, 4];
    const statsWithSort = getArrayStatsWithSort(numbers);

console.log(statsWithSort); 

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and the last word by an 'and'

function concatenateWords(arrayOfWords) {
    if (arrayOfWords.length === 1) {
        return arrayOfWords[0];
    } else if (arrayOfWords.length === 2) {
        return arrayOfWords.join (' and ');
    } else {
        const lastWord = arrayOfWords.pop();
        return arrayOfWords.join(', ') + ', and ' + lastWord;
    }
}

    const words = ['creamy', 'milk', 'coffee'];
    const concatenatedString = concatenateWords(words);

console.log(concatenatedString);

// 3. Write a function to split a string and convert it into an array of words


function splitString(str) {
    const words = str.split(' ');
    return words; 
}
    const sentence = 'creamy milk';
    
console.log(words);
// 4. Write a function to calculate each element in the same position from two arrays of integer
function calculateElement(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
  
    return result;
  }

    const array1 = [15, 10, 5];
    const array2 = [5, 10, 15];

    const calculatedArray = calculateElement(array1, array2);

console.log(calculatedArray);

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array

function addElement(array, element){
    if(!array.includes(element)){
        array.push(element);
    }
    return array;
}

    const array = ["banana", "pineapple", "apple"];
    array.push("red");

console.log(array);

// 6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOddNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers
}
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 10];
    const evenNumbers = removeOddNumbers(numbers2);

console.log(evenNumbers)