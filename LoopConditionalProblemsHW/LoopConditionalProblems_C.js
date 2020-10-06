function factorial(n) {
  let factorialAnswer = 1;

  if (n == 0 || n == 1) {
    return minAnswer;
  } else {
    for (let i = n; i >= 1; i--) {
      factorialAnswer = factorialAnswer * i;
    }
    return factorialAnswer;
  }
}

console.log(factorial(3));

//Other Way:
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(3));
