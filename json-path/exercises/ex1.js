const jp = require('jsonpath')
const { readFile } = require('jsonfile')

readFile('./movie.json')
.then(data => {
    //find all directors
    extract(data,'$.MovieDatabase..movie..director')
    //find all movies
    extract(data,'$.MovieDatabase..movie[*]')
    //find all facebook likes
    extract(data,'$.MovieDatabase..Facebook_like')
    //find last movie
    extract(data,'$.MovieDatabase.movie[(@.length-1)][*]')
    //first two movie
    extract(data,'$..movie[:2]')
    //first three movie
    extract(data,'$..movie[:3]')
    //all movies with genre
    extract(data,'$..movie[?(@.genre)]')
    //movie with fb likes more than 200
    extract(data,'$..movie[?(@.Facebook_like > 200)]')
    //all json document
    extract(data,'$.*')
}) 
.catch(err => {
    console.log(err)
})

const extract = (data, expression) => {
    display(jp.query(data,expression))
}

const display = (result) => {
    console.dir(result,{depth:null})
}