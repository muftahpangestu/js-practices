for (let fizzbuzzNumber = 1; fizzbuzzNumber <= 20; fizzbuzzNumber++) {
  if (fizzbuzzNumber % 3 === 0 && fizzbuzzNumber % 5 === 0) {
    console.log("FizzBuzz");
  } else if (fizzbuzzNumber % 3 === 0) {
    console.log("Fizz");
  } else if (fizzbuzzNumber % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(fizzbuzzNumber);
  }
}
