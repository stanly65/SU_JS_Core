//input comes as array of strings
function extractLinks(arr) {
    let links = [];
    let match;
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    // \. escape point, \- escape dash
    //[A-Za-z0-9\-] всички числа, тире
    //[a-z] само малки букви
    // + веднъж или много пъти предните символи

    for (let elem of arr) {
        while (match = regex.exec(elem)) {
            console.log(match[0]);
        }
    }
}
// extractLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']);
// www.web-stars.com
// www.internet.com
// www.webspiders101.com

