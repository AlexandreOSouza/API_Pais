const fs = require('fs');

module.exports = {
    paises(request, response) {
        fs.open('src/resources/paises.txt', 'r', (err, fileToRead) => {
            if (!err) {
                fs.readFile(fileToRead, (err, data) => {
                    var rawText = data.toString('utf8');
                    const jsonArray = rawText.split('\n').map(line => {
                        const json = {
                            cod: line.substr(0, 4),
                            name: line.substr(5)
                        }
                        return json;
                    })
                    return response.json(jsonArray);
                })
            } else {
                console.log(err);
            }
        })
    }
}