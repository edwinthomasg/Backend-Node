const fs = require('fs')

const writeFile = fs.createWriteStream('./huge.txt')

for(var i = 0; i <= 1e6; i++)
{
    writeFile.write('hjshuhjfshdjhfjfhsjdhbdsbnvbndvcnbdkfkjdfkskfhkjhaskhdfkjahkfhakjhkjhakjkfjhkahkjfhakdfkahdhfkhdkshkjhfkjshajkjdshfakkkkkkkkkkkkkkkkkkkkkkkkkkkkkjkhfdhkhkahkjfhkahfkhdkjfhkjfbbvbkasdfhskfhkskdfhkhakjhfkjdahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\n')
}

writeFile.end()