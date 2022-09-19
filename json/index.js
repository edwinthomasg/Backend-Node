const { writeFile, readFile } = require('fs')
const { readFile } = require('fs/promises')

let config = {
    server : {
        host : 'local',
        port : 0
    }
}

writeFile('./config.json', JSON.stringify(config), () => {
    console.log('written successfully')
})

readFile('./config.json', 'utf-8', (err, data) => {
    let config = JSON.parse(data)
    console.log(config.server)
})

//promise chaining is not efficient in terms of memory allocation, retrieving speed
readFile('./config.json','utf-8')
.then(data => console.log(JSON.parse(data)))
.catch(err => console.log(err))

