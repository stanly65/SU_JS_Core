//judge.softuni.bg         e => e

let curSeq = [1,1];                     //рекурсия -
function fibonacci(n,curS, i) {
    if(n===curS.length){
        return curS;
    }
    curS.push(curS[i-1]+curS[i-2]);
    i++;
    return fibonacci(n,curS,i);
}

console.log(fibonacci(8,curSeq,2).join(' '));

