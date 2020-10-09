//arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.

function arraySum(num) {
  let numSum = 0;

  for (let i = 0; i < num.length; i++) {
    numSum += parseInt(num[i]);
  }
  return numSum;
}

arraySum([1, 2, 3, 4, 5, 6]);
