function sum (a, b, c, d) {
    return a + b + c + d;
}
function curry(sum) {
    let arr = [];
    return  function hz() {
        arr = arr.concat([].slice.call(arguments));
        if (arr.length < 4) {
            return hz;
        } else {
            let temp = arr;
            arr = [];
            return sum(...temp);
        }
    }
}
const f = curry(sum);
console.log(f(1,2));
// console.log(f(1,2)(3,4));
// console.log(f(1)(2)(3)(4));
// console.log(f(1)(2,3,4));
// console.log(f(5,6,7,8));
console.log(f(3,4));