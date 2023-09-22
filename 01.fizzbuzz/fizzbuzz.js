for (let fizzbuzzNumber = 1; fizzbuzzNumber <= 20; fizzbuzz_number++) {
  if (fizzbuzz_number % 3 === 0 && fizzbuzz_number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (fizzbuzz_number % 3 === 0) {
    console.log("Fizz");
  } else if (fizzbuzz_number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(fizzbuzz_number);
  }
}
