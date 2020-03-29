const ascii_table = require('./ascii-table');

const mergeLayers = (a, b) => {
    let arrA = JSON.parse(JSON.stringify(a));
    let arrB = JSON.parse(JSON.stringify(b));

    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrA[0].length; j++) {
            if (arrB[i][j] != ascii_table.empty) {
                arrA[i][j] = arrB[i][j];
            }
        }
    }

    return arrA;
}

const getEmpty2D = (r, c, fillChar) => {
    let arr = [];

    for (let i = 0; i < r; i++) {
        arr.push([])
        for (let j = 0; j < c; j++) {
            arr[i].push(fillChar);
        }
    }

    return arr;
}

module.exports = {
    mergeLayers,
    getEmpty2D
}