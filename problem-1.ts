// problem -1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbers: number[]):number{
    const sumOfAllElement = numbers.reduce((acc, elm)=> acc + elm, 0)
    return sumOfAllElement;
}

console.log(sumArray([1, 2, 3, 4, 5]))





// const sumArray = (num) => {
//         return num.reduce((acc, elm)=> acc + elm, 0)
// }

// const getResult =  sumArray([12,12,12,12])
// console.log(getResult)