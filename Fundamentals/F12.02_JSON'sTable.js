//input comes as array of strings
function jsonTable(arrStr) {
    let html = '<table>\n';
    for(let el of arrStr) {
        let obj = JSON.parse(el);   // JSON.parse() to convert text into a JavaScript object:
        html += '    <tr>\n';
        html += `       <td>${htmlEscape(obj.name)}</td>\n`;
        html += `       <td>${htmlEscape(obj.position)}</td>\n`;
        html += `       <td>${obj.salary}</td>\n`;
        html += '    <tr>\n';
    }
    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
// jsonTable(['{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}','{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}','{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}']);