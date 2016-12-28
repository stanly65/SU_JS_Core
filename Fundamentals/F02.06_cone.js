/**
 *
 * @param {string[]} args
 */
function solve(args) {
    let r = +args[0];
    let h = +args[1];
    let s = Math.sqrt(r *r + h *h); //slant height
    let volume = Math.PI * r *r * h / 3;
    let area = Math.PI * r * (r + s);
    console.log('volume = '+ volume);
    console.log('area = ' + area);
}
solve(['2','3']);