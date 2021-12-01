const textToEncode = 'ABBCCCCGGGGDEAAAEDBBBDFAGG';

class Node {
    constructor(
        frequency,
        data,
        left,
        right
    ) {
        this.frequency = frequency;
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const binaryMapping = {};

function setBinaryCode(root, code) {
    if (!root.left && !root.right) {
        binaryMapping[root.data] = code;
        return;
    }

    // Colocar 0 a todas las direcciones izquierdas
    code += '0';
    setBinaryCode(root.left, code);
    code = code.slice(0, code.length - 1);
    // console.log('left', code);

    // Colocar 1 a todas las direcciones derechas
    code += '1';
    setBinaryCode(root.right, code);
    code = code.slice(0, code.length - 1);
}

function huffmanEncode(str) {
    // Crear un hash para contar ocurrencias
    const ocurrences = {};
    for (let i = 0; i < str.length; i++) {
        if( !(str[i] in ocurrences) ) {
            ocurrences[str[i]] = 0;
        }

        ocurrences[str[i]]++;
    }

    // Generar el arbol
    const nodes = [];
    for ( let char of Object.keys(ocurrences) ) {
        nodes.push(
            new Node(
                ocurrences[char],
                char,
                null,
                null,
            )
        );
    }

    // Ordenar el arreglo por cantidad de ocurrencias
    nodes.sort((a, b) => a.frequency - b.frequency);

    // Armar arbol
    while ( nodes.length > 1 && nodes !== 'undefined') {
        const first = nodes.shift();
        const second = nodes.shift();
        const mergeNode = new Node(
            first.frequency + second.frequency,
            first.frequency + second.frequency,
            first,
            second
        );

        nodes.push(mergeNode);
        nodes.sort((a, b) => a.frequency - b.frequency);
    }

    // Colocar los binarios 0 a la izquierda y 1 a la derecha del arbol de huffman
    const root = nodes.shift();
    setBinaryCode(root, '');

    // Encodear usando el arbol de huffman
    let finalCode = '';
    for (let i = 0; i < str.length; i++) {
        finalCode += binaryMapping[str[i]];
    }

    return finalCode;
}

const result = huffmanEncode(textToEncode);
console.log('Result', result);
console.log('Real', '110110011000111011111010010010110110110111001011000101')
console.log('Len', result.length);
console.log('LenR', '110110011000111011111010010010110110110111001011000101'.length);
