function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let q = (a + b + c) / 2; //полупериметър
    let area = Math.sqrt(q * (q - a) * (q - b) * (q - c));
    console.log(area);
}
triangleArea([2, 3.5, 4]);