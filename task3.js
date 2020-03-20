function sum (a, b, c, d) {
    return a + b + c + d;
}
function curry(sum) {
    return  function hz() {
        let arr = [];
        arr = arr.concat([].slice.call(arguments));
        if (arr.length < 4) {
            return function hz1() {
                arr = arr.concat([].slice.call(arguments));
                if (arr.length < 4) {
                    return hz1;
                } else {
                    return sum(...arr);
                }
            };
        } else {
            return sum(...arr);
        }
    }
}
const f = curry(sum);
console.log(f(1,2)(3,4));
console.log(f(1)(2)(3)(4));
console.log(f(1)(2,3,4));
console.log(f(5,6,7,8));