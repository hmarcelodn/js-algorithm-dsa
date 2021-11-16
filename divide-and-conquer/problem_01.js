const unsortedArr = [4, 3, 2, 1];

const mergeSort = function(arr) {
    console.log(arr);

    // Base Case: When the array only has 1 element
    if (arr.length === 1) {
        return arr;
    }

    //Divide: Recursively
    const mid = Math.floor((0 + arr.length) / 2);
    const arr1 = mergeSort(arr.slice(0, mid));
    const arr2 = mergeSort(arr.slice(mid, arr.length));

    // Conquer: Merge
    const merged = [];

    // Compare position to position
    while (arr1.length && arr2.length) {
        merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    }

    // Left values from arr1
    while (arr1.length) {
        merged.push(arr1.shift());
    }

    // Left values from arr2
    while (arr2.length) {
        merged.push(arr2.shift());
    }

    return merged;
}

const result = mergeSort(unsortedArr);
console.log('Merge sort', result);
