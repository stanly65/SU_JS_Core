function solve(args) {
    let speed1 = +args[0]; //speed km/h
    let speed2 = +args[1];// km/h * 1000/3600 = m/s
    let time = +args[2]; //sec

    let dist1 = speed1 * (10 / 36) * time;
    let dist2 = speed2 * (10 / 36) * time;
     let delta = Math.abs(dist1-dist2); //distance m
     console.log(delta)
}
solve([0, 60, 3600]);
solve([5, -5, 40]);