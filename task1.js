const calc = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + i;
    }
    return sum;
};
const memoize = (calc) => {
    const results = {};
    return (n) => {
        if (n in results) {
            return results[n];
        } else {
            results[n] = calc(n);
            return results[n];
        }
    };
};
const f = memoize(calc);

console.log(f(1000000000));
console.log(f(1000000000));
console.log(f(1000000000));