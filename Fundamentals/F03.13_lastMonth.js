function solve([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    //let date = new Date(year, month - 1, day); //единствено месеца започва от 0 и приключва на 11 !!!
    let date = new Date(year, month - 1, 1); //дните не са ни небоходими - правим ги на първи (1)
    //let date = new Date(year, month - 1, 0);
    date.setDate(0);

    console.log(date.getDate());
}

solve(['17','3','2002']);
solve(['13','12','2004']);