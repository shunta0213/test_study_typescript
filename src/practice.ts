let result: string = ""
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz "
    } else if (i % 5 === 0) {
        result += "Buzz "
    } else if (i % 3 === 0) {
        result += "Fizz "
    } else {
        result += String(i) + " "
    }
}

console.log(result)