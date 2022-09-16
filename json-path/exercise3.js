const { readFile } = require('jsonfile')
const jp = require('jsonpath')

readFile('./camera.json')
.then(json => {
    //query to list the camera type of camera with id en-RP-100
    display(jp.query(json, '$.screens[?(@.id == \'en-RP-100\')].cameraType[*]'))
    //get all production places for element en-RP-100 filtered by id
    display(jp.query(json, '$.screens[?(@.id == \'en-RP-100\')].productionPlaces[*][*]' ))
    //get only 2nd array of production places for element en-RP-100 filtered by id
    display(jp.query(json, '$.screens[?(@.id == \'en-RP-100\')].productionPlaces[1][*]'))
    //get only 2nd array of 2nd production places for element en-RP-100 filtered by id
    display(jp.query(json, '$.screens[?(@.id == \'en-RP-100\')].productionPlaces[1][1]'))
    //get all production places
    display(jp.query(json, '$..productionPlaces[*][*]'))
    //get all products if it has id field
    display(jp.query(json, '$.screens[?(@.id)]'))
})
.catch(err => console.log(err))

const display = (result) => {
    console.dir(result)
}