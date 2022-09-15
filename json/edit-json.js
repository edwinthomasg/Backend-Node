const edit = require('edit-json-file')

let file = edit('./extra.json')
file.set('name','ross')
file.set('stack\\.name','mern')
file.set('preference',['chennai','bangalore'])
file.append('lang',{ 'mongo' : 90 , 'react' : 90 })
file.pop('preference') //removes array elements
console.log(file.get())
console.log(file.get('name'))
file.save()
