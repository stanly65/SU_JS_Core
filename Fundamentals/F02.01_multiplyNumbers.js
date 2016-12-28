/**
 *
 * @param {string[]} args
 */
function solve([bottels,boxes]) {
    [bottels,boxes]=[bottels,boxes].map(Number);
    let needBoxes = Math.ceil(bottels/boxes);
    console.log(needBoxes);
}

solve([15, 7]);