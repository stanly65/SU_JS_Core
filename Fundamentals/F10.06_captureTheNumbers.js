//input comes as array of strings
function capNum(arrs) {
    console.log(arrs
        .join('')          //"The300What is that?I think it’s the 3rd movie.Lets watch it at 22:45"
        .match(/\d+/g)     //["300", "3", "22", "45"]
        .join(' '));       //"300 3 22 45"
}
//capNum(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);