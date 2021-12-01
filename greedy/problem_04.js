// Matrix de adyacencia con todas las conexiones del grafo
const adjancencyMatrix = [
    [0, 3, 5, 6, 0, 8, 0],
    [3, 0, 0, 4, 2, 0, 5],
    [5, 0, 0, 0, 0, 4, 0],
    [6, 4, 0, 0, 0, 1, 6],
    [0, 2, 0, 0, 0, 0, 10],
    [8, 0, 6, 1, 0, 0, 8],
    [0, 8, 0, 6, 10, 8, 0]
];

function dijkstra(adjancencyMatrix) {
    // Registro los nodos visitados
    // Registro las distancias minimas a cada nodo
    const visited = new Array(adjancencyMatrix.length).fill(false);
    const distance = new Array(adjancencyMatrix.length).fill(Number.MAX_SAFE_INTEGER);
    distance[0] = 0;

    // Recorrer el grafo hasta que no queden mas nodos que visitar
    while (true) {
        // Busco el nodo origen
        let shortestDistance = Number.MAX_SAFE_INTEGER;
        let shortestIndex = -1;
        for (let i = 0; i < adjancencyMatrix.length; i++) {
            if (distance[i] < shortestDistance && !visited[i]) {
                shortestIndex = i;
                shortestDistance = distance[i];
            }
        }

        // Finalizar recorrido cuando no quedan mas nodos que visitar
        if (shortestIndex === -1) {
            console.log('Finished...');
            for (let i = 0; i < adjancencyMatrix.length; i++) {
                console.log(`Node ${i} with ${distance[i]}`)
            }
            break;
        }

        // Busco todos los nodos adyacentes
        for (let i = 0; i < adjancencyMatrix.length; i++) {
            // Si existe una conexion entre los nodos adyacentes
            // Y si la distancia entre el nodo actual +la distancia al nodo nuevo es menor a la distancia minima del nodoactual 
            // entonces corregit
            if (
                adjancencyMatrix[shortestIndex][i] !== 0
                && (adjancencyMatrix[shortestIndex][i] + distance[shortestIndex]) < distance[i]
            ) {
                distance[i] = adjancencyMatrix[shortestIndex][i] + distance[shortestIndex];
            }
        }

        visited[shortestIndex] = true;
        console.log(`Visiting ${shortestIndex} with distance ${shortestDistance}`);
    }

    // Mostrar distancias


}

dijkstra(adjancencyMatrix);
