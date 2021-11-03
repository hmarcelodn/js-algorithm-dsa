const productSumOfArray = (arr, depth = 1) => {
    let sum = 0;
    arr.forEach((item) => {
        if (!Array.isArray(item)) {
            sum += item * depth;
        } else {
            sum += productSumOfArray(item, depth + 1);
        }
    });

    return sum;
}

const result = productSumOfArray([1,2,[3,2], 6, [[2, 4], 1], 7]);
console.log(`Resultado: ${result}`);
