//input comes as array of strings     “{systemName} | {componentName} | {subcomponentName}”
function systComp(arrStr) {

    let total = new Map;
    for (let el of arrStr) {
        let arr = el.split(' | ');
        let sysName = arr[0];
        let compName = arr[1];
        let subCompName = arr[2];

        if (!total.get(sysName)) {
            total.set(sysName, new Map())
        }
        if (!total.get(sysName).get(compName)) {
            total.get(sysName).set(compName, [])
        }
        total.get(sysName).get(compName).push(subCompName);
    }
    let totalSorted = [...total.keys()].sort(mSort);

    for(let sysName of totalSorted) {
        console.log(sysName);
        let compSorted = Array.from(total.get(sysName).keys()).sort((c1, c2) => cSort(sysName, c1, c2));

        for(let compName of compSorted) {
            console.log(`|||${compName}`);
            total.get(sysName).get(compName).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function mSort(s1, s2) {
        if(total.get(s1).size !== total.get(s2).size) {
            return total.get(s2).size - total.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function cSort(sysName, c1, c2) {
        return total.get(sysName).get(c2).length - total.get(sysName).get(c1).length;
    }
}
// systComp(["SULS | Main Site | Home Page", "SULS | Main Site | Login Page", "SULS | Main Site | Register Page", "SULS | Judge Site | Login Page", "SULS | Judge Site | Submittion Page", "Lambda | CoreA | A23", "SULS | Digital Site | Login Page", "Lambda | CoreB | B24", "Lambda | CoreA | A24", "Lambda | CoreA | A25", "Lambda | CoreC | C4", "Indice | Session | Default Storage", "Indice | Session | Default Security"]);