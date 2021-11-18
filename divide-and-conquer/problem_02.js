const arr = [5, 4, 10, 2, 1, 0];

const quickSort = (arr) => {

    // Debug
    console.log(arr);

    // Base Case: When only 1 element, then its sorted
    if (arr.length === 1) {
        return arr;
    }

    if (arr.length === 0) {
        return [];
    }

    // Divide: Partition using pivot then recurse
    const pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else if (arr[i] > pivot) right.push(arr[i]);
    }

    left = quickSort(left);
    right = quickSort(right);

    //Conquer: Merge left sorted + pivot + right sorted
    return [
        ...left,
        pivot,
        ...right
    ];
}

const res = quickSort(arr);
console.log(res);
