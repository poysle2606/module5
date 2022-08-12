function fibonacci(number) {
    if (number < 3) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Total:" + sum);
