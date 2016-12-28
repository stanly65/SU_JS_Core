function circleArea(r) {
    let area = Math.PI * r ** 2;
    console.log(area); //78.53981633974483
    //let areaRounded1 = Math.round(area * 10 ** 12) / 10 ** 12;
    let areaRounded2 = area.toFixed(2);
    //console.log(areaRounded1);
    console.log(areaRounded2);
 }


circleArea(5);