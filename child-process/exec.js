const { exec, execFile, spawn } = require('child_process')

// exec('find /',(error,stdout,stderr) => {
//     if(error)
//     console.log(`Error : ${error.message}`)
//     if(stderr)
//     console.log(`Std Error : ${stderr}`)
//     console.log(`Output : ${stdout}`)
// })


// execFile('./file.sh',(error,stdout,stderr) => {
//     console.log(process.pid)
//     if(error)
//     console.log(`Error : ${error.message}`)
//     if(stderr)
//     console.log(`Std Error : ${stderr}`)

//     console.log(`Output : ${stdout}`)
// })

console.log(process.pid)
let child = spawn('ls',['-lh'])
child.stderr.on('data',(data) => {
    console.log(`data : ${data} `)
})
child.stdout.on('data',(data) => {
    console.log(`data : ${data} `)
})
child.on('close',(code) => console.log(`Process exited with code ${code}`))
child.on('error',(error) => console.log("error thrown : ",error))
child.on('exit',(code, signal) => {
    console.log('exit with code : ',code)
})

// let a = [1,2,3]
// let [x,y,z] = [...a]
// console.log(x)
// let obj = {
//     name : 'edwin',
//     age : 21
// }
// let ob = {
//     name : 'akash',
//     location : 'chen'
// }
// let cloned = {...obj,...ob}
// console.log(cloned)
