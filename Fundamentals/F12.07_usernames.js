//input comes as array of strings   сортиране по дължина и alphabetical order
function users(arrStr) {
    let setN = new Set();

    for (let el of arrStr) {
        setN.add(el);
    }

    [...setN].sort(lengthThenAZ).forEach(u => console.log(u));

    function lengthThenAZ(a, b) {
        if (a.length !== b.length) {
            return (a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }

}
//users(["Denise", "Ignatius", "Iris", "Isacc", "Indie", "Dean", "Donatello", "Enfuego", "Benjamin", "Biser", "Bounty", "Renard", "Rot"]);
