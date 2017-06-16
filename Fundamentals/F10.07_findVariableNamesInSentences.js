//input comes as single string   (променлива започва с _букви и числа
function varStr(str) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;    //\b - разстояние преди дума и след дума
    let varArr = [];
    let match;

    while (match = regex.exec(str)) {
        varArr.push(match[1]);        // вземаме първия член защото ни трябва думата без _
    }
    console.log(varArr.join(','));
}
//varStr('Calculate the _area of the _perfectRectangle object.');  //area,perfectRectangle

// regex.exec(str)
//     [ '_area',                           //match[0]
//     'area',                             //match[1]
//     index: 14,
//     input: 'Calculate the _area of the _perfectRectangle object.' ]