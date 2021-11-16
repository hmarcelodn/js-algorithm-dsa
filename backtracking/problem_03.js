// Knight-Tour Problem

// Choices
const rowStep = [2, 1, -1, -2, -2, -1, 1, 2];
const colStep = [1, 2, 2, 1, -1, -2, -2, -1];
const chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

const isValidStep = (board, row, column) => {
    if (
        (row >= 0 && row < board.length) &&
        (column >=0 && column < board.length) &&
        (board[row][column] === 0)
    ) {
        return true;
    }

    return false;
}

const solveKnightTour = (board, row, column, step) => {

    // Base Case: When it is the last step
    if (step === (board.length * board.length - 1)) {
        console.log('step', step, (board.length ^ 2) - 1);
        return true;
    }

    // Constraints: Validate next step, recurse
    for (let i = 0; i < board.length; i++) {
        const newCol = column + colStep[i];
        const newRow = row + rowStep[i];

        if (isValidStep(board, newRow, newCol)) {
            // Fill step
            step++;
            board[newRow][newCol] = step;
    
            //Recurse
            if (solveKnightTour(board, newRow, newCol, step)) {
                return true;
            }
    
            step--;
            board[newRow][newCol] = 0;
        }
    }

    // Backtrack
    return false;
};

const result = solveKnightTour(chessBoard, 0, 0, 0);

if ( result ) {
    for ( let arr of chessBoard ) {
        console.log(arr);
    }
} else {
    console.log('failed!');
}
