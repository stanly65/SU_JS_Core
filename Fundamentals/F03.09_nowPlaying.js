function solve(args) {
let nameSong = args[0];
let nameArtist = args[1];
let duration = args[2];
console.log('Now Playing: '+ nameArtist+ ' - '+ nameSong + ' [' + duration + ']');
}
solve(['Number One', 'Nelly', '4:09']);