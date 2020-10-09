//Write a function using a for loop that returns the sum of all numbers from 1 to n.

function numSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(numSum(4));
