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
