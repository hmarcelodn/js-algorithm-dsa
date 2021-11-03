function findSubsequences(word) {

    // base case
    if (word === '') {
        return [''];
    }

    const first = word[0];
    const result = findSubsequences(word.slice(1)); // O(n) => Returns O(2^n) results
    const final = [];

    // O(2^n) Si n=3, findSubsequences para bc, devuelve 4 resultados, 2^2=4
    for (let i = 0; i < result.length; i++) {
        final.push(first + result[i]);
    }

    // O(2^n) Si n=3, findSubsequences para bc, devuelve 4 resultados, 2^2=4
    for (let i = 0; i < result.length; i++) {
        final.push(result[i]);
    }

    // 2^2 + 2^2 = 8 => 2^4=8 => 2^n
    // 0(2^n + 2^n) = O(2^2n) = O(2^n)

    return final;

}

// n = 3
const word = 'abc';
console.log(findSubsequences(word));
