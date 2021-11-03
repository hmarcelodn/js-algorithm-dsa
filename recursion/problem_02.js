// Complejidad Temporal: (ramas de recursion)^n = 2^n
// Complejidad Espacial: 
const hanoi = (n, start, end, aux) => {

    // Caso Base: Cuando solamente tengo 1 disco, lo coloco en la torre destino
    if (n === 1) {
        console.log(`Moving ${n} ${start} -> ${end}`);
        return;
    }

    // Muevo todos los discos de la torre origen, a la torre auxiliar
    hanoi(n-1, start, aux, end);

    // Muevo el disco mas grande al final
    console.log(`Moving ${n} ${start} -> ${end}`);

    // Muevo los discos de la torre auxiliar a la torre final
    hanoi(n-1, aux, end, start);
}

hanoi(4, 'A', 'C', 'B');
