const excel = require("exceljs");

const wb = new excel.Workbook();
const ws = wb.addWorksheet("cricket");

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

ws.columns = [
  { header: "Cricketer", key: "name", width: 10 },
  { header: "Matches", key: "matches", width: 10 },
  { header: "Runs", key: "runs", width: 10 },
  { header: "Average", key: "avg", width: 10 },
];
let s_no = 1;
cricket.forEach((player) => {
  console.log(player);
  (player.S_No = s_no), ws.addRow(player);
  s_no++;
});

ws.getRow(1).eachCell((cell) => (cell.font = { bold: true }));

let writeFile = async () => {
  await wb.xlsx.writeFile("./cricketers.xlsx");
};

writeFile();
