// practice 1

const getFizzBuzzString = (i: number): string => {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz "
    } else if (i % 5 === 0) {
        return "Buzz "
    } else if (i % 3 === 0) {
        return "Fizz "
    } else {
        return String(i)
    }

}

for (let i = 1; i <= 100; i++) {
    const msg: string = getFizzBuzzString(i)
    console.log(msg)
}

const sequence = (min: number, max: number): number[] => {
    const result: number[] = []
    for (let i: number = min; i <= max; i++) {
        result.push(i)
    }
    return result
}

console.log(sequence(1, 100))

// practice2

const numberArrMap = (array: number[], callback: (arg: number) => number): number[] => {
    const result: number[] = []
    for (let i of array) {
        result.push(callback(i))
    }
    return result
}

const data: number[] = [1, 2, 3, 4, 6, 102]
const result = numberArrMap(data, (x) => x * 10)
console.log(result)

const map = <T, R>(array: T[], callback: (arg: T) => R): R[] => {
    const result: R[] = []
    for (let i of array) {
        result.push(callback(i))
    }
    return result
}

console.log(map(data, (i) => i ** 2))

const data1: number[] = [1, -3, -2, 8, 0, -1]
const result1: boolean[] = map(data1, (x) => x >= 0)
console.log(result1)