const excel = require("exceljs");
const express = require("express");

const app = express();

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

const workBook = new excel.Workbook();
const workSheet = workBook.addWorksheet("casts");

const writeFile = async (req, res) => {
  workSheet.columns = [
    { header: "S No", key: "s_no", width: 10 },
    { header: "Name", key: "fname", width: 10 },
    { header: "Age", key: "age", width: 10 },
    { header: "Gender", key: "gender", width: 10 },
    { header: "Birth", key: "birth", width: 10 },
  ];

  let no = 1;

  users.forEach((user) => {
    user.s_no = no;
    workSheet.addRow(user);
    console.log(user)
    no++;
  });

  workSheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  try {
    await workBook.xlsx.writeFile("./file.xlsx").then(() => {
      console.log("successfully written");
      res.send({
        status: "success",
        message: "file successfully written",
        path: `./file.xlsx`
      });
    });
  } catch (err) {
    console.log(err);
  }
};


app.get("/", writeFile);
app.listen(3050, () => console.log(`Listening on the port : 3050`));
