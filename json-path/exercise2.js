const { readFile } = require('jsonfile')
const jp = require('jsonpath')

readFile('./movie.json')
.then(json => {
    //1st movie
    display(jp.query(json, '$.event.movies[0]'))
    //movie rating > 5
    display(jp.query(json, '$.event.movies[?(@.rating > 5)]'))
    //list only the names from the movie array of objects
    display(jp.query(json, '$.event.movies..name'))
    //1st two movies using slice
    display(jp.query(json, '$.event.movies[:2]'))
    //last two movies using slice
    display(jp.query(json, '$.event.movies[-2:]'))
    //last movie using length property
    display(jp.query(json, '$.event.movies[(@.length - 1)]'))
})
.catch(err => console.log(err))

const display = (result) => {
    console.dir(result)
}