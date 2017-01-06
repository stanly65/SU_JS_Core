/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let speed = +args[0];
    let road = args[1];
    let limit = 0;
    if (road === 'motorway') limit = 130;
    if (road === 'interstate') limit = 90;
    if (road === 'city') limit = 50;
    if (road === 'residential') limit = 20;

   function infr(speed, limit) {
        if (speed > limit) {
            if (speed - limit <= 20) return 'speeding';
            if (speed - limit <= 40) return 'excessive speeding';
            if (speed - limit > 40) return 'reckless driving';
        }
        else return '';     // без else връща undefined и гърми!!!
    }
console.log(infr(speed, limit));

}

solve(['21','residential']);