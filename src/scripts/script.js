const fs = require('node:fs');
const path = require('path');


function createConfigFile() {
    //Read config based on environment variables
    fs.readFile(path.resolve(__dirname, `../configs/config.${process.env.ENV}.js`), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        fs.writeFile(path.resolve(__dirname, '../configs/config.js'), data, (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log('Config file created successfully')
        })
    })
}

createConfigFile();


