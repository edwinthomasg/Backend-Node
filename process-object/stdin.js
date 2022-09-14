let users = [{
    name : 'edwin',
    stack : 'mern'
},{
    name : 'akash',
    stack : 'oracle'
},{
    name : 'saju',
    stack : 'perl'
},{
    name : 'karthi',
    stack : 'mern'
},{
    name : 'rannith',
    stack : 'mern'
}
]

users.forEach( user => {
    if(user.stack === 'mern')
        process.stdout.write(`your name : ${user.name}\n`)
    else 
        process.stderr.write('you dont have access\n')
})