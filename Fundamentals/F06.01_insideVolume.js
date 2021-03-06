/**
 *
 * @param {string[]} args
 */
function solve(args) {
    for (let i = 0; i < args.length; i += 3) {
        let x = +args[i];
        let y = +args[i + 1];
        let z = +args[i + 2];

        if (inVolume(x, y, z) === true) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
        return false;
    }
}

solve(['13.1','50','31.5','50','80','50','-5','18','43']);