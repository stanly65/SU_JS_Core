//input comes as an array of arrays, containing numbers (number 2D matrix) (true - sum row = sum colum)
function isMagic(matr) {

    let sum = matr[0].reduce((a, b) => a + b);
    let mag = true;

    for (let i = 1; i < matr.length; i++) {
        if (sum !== matr[i].reduce((a, b) => a + b)) {
            mag = false;
        }
    }

    for(let col=0; col<matr[0].length; col++) {
        let sumCol = 0;
        for(let row=0; row<matr.length; row++) {
            sumCol += matr[row][col];
        }

        if(sumCol !== sum) {
            mag = false;
        }
    }
    console.log(mag);
}
isMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
isMagic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
