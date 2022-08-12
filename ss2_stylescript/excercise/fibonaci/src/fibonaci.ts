function fibonacci(number: number): any {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let sum: number = 0;
for (let i = 0; i < 10 ; i++) {

    console.log(fibonacci(i));

    sum += fibonacci(i);
}
console.log(`Total:` + sum)