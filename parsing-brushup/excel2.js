const excel = require("xlsx");

let cricket = [
  {
    name: "virat",
    matches: 20,
    runs: 1350,
    avg: 80,
  },
  {
    name: "dhoni",
    matches: 20,
    runs: 1050,
    avg: 55,
  },
  {
    name: "sachin",
    matches: 20,
    runs: 1300,
    avg: 79,
  },
  {
    name: "abd",
    matches: 20,
    runs: 1250,
    avg: 75,
  },
  {
    name: "gayle",
    matches: 20,
    runs: 1200,
    avg: 65,
  },
];

const wb = excel.utils.book_new();
let excelSheetData = excel.utils.json_to_sheet(cricket);
excel.utils.book_append_sheet(wb, excelSheetData, "cricketer");
console.log(wb.Sheets['cricketer']);
excel.writeFile(wb, "./cricket.xlsx");
