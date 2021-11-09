// Rat in maze - Backtracking
const solveRatInMaze = (matrix, xPos, yPos, solution) => {
    // Base Case 1:
    // Si estoy en el final del array y puedo salir, entonces encontre
    // una salida
    if (
        xPos === (matrix.length - 1) && 
        yPos === (matrix.length - 1) &&
        matrix[xPos][yPos] === 1
    ) {
        solution[xPos][yPos] = 1;
        return true;
    }

    // Base Case 2:
    // Si no es seguro moverse, backtracking
    if (
        xPos > (matrix.length - 1) ||
        yPos > (matrix.length - 1) ||
        matrix[xPos][yPos] === 0
    ) {
        return false;   
    }

    solution[xPos][yPos] = 1;

    // Recursion call 1:
    // Si no fue el caso base intento moverme primero en x
    if (solveRatInMaze(matrix, xPos + 1, yPos, solution)) {
        return true;
    }

    // Recursion call 2:
    // Si no fue el caso base ni pude moverme en x, me muevo en y
    if (solveRatInMaze(matrix, xPos, yPos + 1, solution)) {
        return true;
    }

    // Backtracking:
    // Si no pude moverme mas y no llegue al caso base, backtracking
    solution[xPos][yPos] = 0;

    return false;
}

const matrix = [
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
];

const solution = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

const mazeResult = solveRatInMaze(matrix, 0, 0, solution);

if (mazeResult) {
    console.log('Path found');
} else {
    console.log('Path not found');
}

for (let arr of solution) {
    console.log(arr);
}
