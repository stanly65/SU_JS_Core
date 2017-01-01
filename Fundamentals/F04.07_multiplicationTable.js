function solve(n) {
        let table = '<table border = "1">';
    let header = '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        header += '<th>' + i + '</th>';
    }
    let body = '';
    for (let i = 1; i <= n; i++) {
        body += '<tr><th>' + i + '</th>';
        for (let j = 1; j <= n; j++) {
            body += '<td>' + (i * j) + '</td>';
        }
        body += '</tr>';
    }
    header += '<tr>';
    table += header;
    table += body;
    table += '</table>';
    return table;
}

