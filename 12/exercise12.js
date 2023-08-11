// Exercise
// No 1

function getColumnNumber(columnTitle) {
  columnTitle = columnTitle.toUpperCase();
  let columnNumber = 0;
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (const char of columnTitle) {
    columnNumber = columnNumber * 26 + base.indexOf(char) + 1;
  }

  return columnNumber;
}

const columnTitle = "AB";
const columnNumber = getColumnNumber(columnTitle);
console.log(columnNumber);

// No 2 Given a non-empty array of integers nums, ever element appears twice except for one. find that single one

function findSingleNumber(nums) {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}

const input = [3, 3, 4, 8, 8];
const output = findSingleNumber(input);

console.log(output);

// No 3 Given two strings s and t, return true if t is an anagram of s, and false otherwise

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  for (const key in charCount) {
    if (charCount[key] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// No 4 You are climbing a staircase. n = 3

function climbStairs(n) {
  if (n <= 3) {
    return n;
  }

  const stairs = [0, 1, 2, 3];

  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2] + stairs[i - 3];
  }
  return stairs[n];
}

console.log(climbStairs(3));
