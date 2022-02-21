// let factorial = 1;
// for (let i = 1;i <= 5; i++ ){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorialNum(number) {
    let factorial= 1;
    for (let i = 1; i <= number; i++) {
         factorial = factorial * i;     
    }
    return factorial;
}
const myFactNumber = 7;
const factNumberCount = factorialNum(myFactNumber);
console.log(factNumberCount);