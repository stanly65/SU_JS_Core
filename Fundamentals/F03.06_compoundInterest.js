//главница, лихва, период, време
function solve(args){
    //args = args.map(Number);
let principal = +args[0];
let interest = +args[1];
let period = +args[2];
let time = +args[3];
//обръщаме лихвата във фракция от 1 , а не в проценти
    interest /= 100;
 //преобразуваме периода на честота (12 месеца)
    let frequency = 12 / period;
    // Въвеждаме формулата
    let total = principal* Math.pow((1+ interest/frequency),frequency*time);
    console.log(total.toFixed(2));
}

solve(['1500','4.3','3','6']);
solve(['100000','5','12','25']);