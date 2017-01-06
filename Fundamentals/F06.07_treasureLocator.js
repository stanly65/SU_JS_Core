/**
 *
 * @param {string[]} args
 */
function solve(args) {
    for (let i = 0; i < args.length; i += 2) {
        let x = +args[i];
        let y = +args[i + 1];

        if (inTokelau(x, y) === true) console.log('Tokelau');
        else if (inTuvalu(x, y) === true) console.log('Tuvalu');
        else if (inSamoa(x, y) === true) console.log('Samoa');
        else if (inTonga(x, y) === true) console.log('Tonga');
        else if (inCook(x, y) === true) console.log('Cook');
        else console.log('On the bottom of the ocean');
    }
    function inTokelau(x, y) {
        let x1 = 8, x2 = 9;
        let y1 = 0, y2 = 1;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                return true;
            }
        }
        return false;
    }

    function inTuvalu(x, y) {
        let x1 = 1, x2 = 3;
        let y1 = 1, y2 = 3;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                return true;
            }
        }
        return false;
    }

    function inSamoa(x, y) {
        let x1 = 5, x2 = 7;
        let y1 = 3, y2 = 6;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                return true;
            }
        }
        return false;
    }

    function inTonga(x, y) {
        let x1 = 0, x2 = 2;
        let y1 = 6, y2 = 8;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                return true;
            }
        }
        return false;
    }

    function inCook(x, y) {
        let x1 = 4, x2 = 9;
        let y1 = 7, y2 = 8;
        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                return true;
            }
        }
        return false;
    }
}
solve(['4','2','1.5','6.5','1','3']);