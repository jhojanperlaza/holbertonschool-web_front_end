function countPrimeNumbers() {
    let primeNumbers = [];

    for (let number = 2; number <= 100; number++) {
        let isPrime = true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeNumbers.push(number);
        }
    }

    return primeNumbers;
}
const init = performance.now()
for (let c = 0; c < 99; c++) {
    countPrimeNumbers();
}
const end = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${end - init} milliseconds.`);