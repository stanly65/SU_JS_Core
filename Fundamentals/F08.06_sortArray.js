//input comes as array of strings
function printAr(arr) {
    let sortArr = arr.sort().sort((a,b)=> a.length > b.length);
        console.log(sortArr.join('\n'));
}
//printAr(['test', 'Deny', 'omen', 'Default']);

// function sortArray(arr) {
//     console.log(arr.sort(compare).join('\n'));
//     function compare(a, b) {
//         if (a.length < b.length) {
//             return -1;
//         } else if (a.length > b.length) {
//             return 1;
//         } else {
//             if (a < b) {
//                 return -1;
//             } else if (a > b) {
//                 return 1
//             } else {
//                 return 0;
//             }
//         }
//     }
// }
