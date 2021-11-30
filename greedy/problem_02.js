// Interval Scheduling
const intervals = [
    [0, 3],
    [0, 15],
    [5, 10],
    [7, 12],
    [11, 16],
    [12, 14],
    [16, 20],
];

function schedule(intervals) {
    // Sort intervals by endtime
    const sortedIntervals = intervals.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1;
        }

        return -1;
    });

    const validIntervals = [];

    // Keep the last valid endtime
    let lastEndTime = -1;

    for (let interval of sortedIntervals) {
        if (interval[0] >= lastEndTime) {
            lastEndTime = interval[1];
            validIntervals.push(interval);
        }
    }

    return validIntervals;
}

const result = schedule(intervals);
console.log(result);
