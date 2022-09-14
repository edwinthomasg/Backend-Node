const xlsx = require('xlsx')

const wb = xlsx.readFile('./file.xlsx', {cellDates : true}) //options it will list the dates in js format

// console.log(wb.SheetNames) //it will list all the tab(worksheet) names inside a workbook

const ws = wb.Sheets['casts']

console.log(wb)

let casts = xlsx.utils.sheet_to_json(ws)
console.log(casts)
console.log('type : ',typeof casts)
const modifiedDoc = casts.map( record => {
    record.Special_Number = record.Age + 100
    return record
})


const newWb = xlsx.utils.book_new()

xlsx.utils.book_append_sheet(newWb,xlsx.utils.json_to_sheet(modifiedDoc),'Updated Sheet')

xlsx.writeFile(newWb,"Result Doc.xlsx")

let users = [
    {
      fname: "joey",
      age: 22,
      gender: "male",
      birth: new Date('2000/09/29')
    },
    {
      fname: "chandler",
      age: 22,
      gender: "male",
      birth: new Date('2001/08/29')
    },
    {
      fname: "ross",
      age: 22,
      gender: "male",
      birth: new Date('2002/08/29')
    },
    {
      fname: "monica",
      age: 22,
      gender: "female",
      birth: new Date('1999/10/10')
    },
    {
      fname: "rach",
      age: 22,
      gender: "female",
      birth: new Date('2002/05/29')
    },
    {
      fname: "pheebe",
      age: 22,
      gender: "female",
      birth: new Date('1998/07/18')
    },
  ];

  users = xlsx.utils.json_to_sheet(users)

  xlsx.utils.book_append_sheet(newWb,users,'book sheet')
  xlsx.writeFile(newWb,'test.xlsx')