// N-Queens - Backtracking

const chessBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

const print = () => {
    // Print results
    for (let arr of chessBoard) {
        console.log(arr);
    }
}

// Check the constraints
const isSafe = (board, row, column) => {
    // Check if exceeded limits
    if (
        row > (board.length - 1) ||
        column > (board.length - 1)
    ) {
        return false;
    }

    // Check horizontal line
    for (let i = 0; i < column; i++) {
        if (board[row][i] === 1) {
            return false;
        }
    }

    // Check vertical line
    for (let i = 0; i < board.length; i++){
        if (board[i][column] === 1) {
            return false;
        }
    }

    // Check diagonally
    for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    for (let i = row, j = column; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    return true;
}

const solveQueens = (board, column) => {
    // Base Case 1:
    // If column is larger than max then all columns were covered
    if (column >= board.length) {
        return true;
    }

    // If I can use the position, write 1 indicating the queen position
    for (let row = 0; row < board.length; row++) {
        // If the position is safe, place the queen
        if (isSafe(board, row, column)) {
            // Place the queen
            board[row][column] = 1;
    
            // Add a new queen in the next column
            if (solveQueens(board, column + 1)) {
                return true;
            }
    
            // Backtracking
            board[row][column] = 0;
        }
    }

    return false;
}

// Solve chess
const result = solveQueens(chessBoard, 0);

if (result) {
    console.log('Chess solved...');
    print();
} else {
    console.log('Chess has not solution...');
}

