const excel = require("exceljs");
const { readFile } = require("jsonfile");

const wb = new excel.Workbook();
const ws = wb.addWorksheet("movie");

ws.columns = [
  { header: "Name", key: "name", width: 20 },
  { header: "Actor", key: "actor", width: 20 },
  { header: "Actress", key: "actress", width: 20 },
  { header: "Music", key: "music", width: 20 },
];

readFile("./movie.json", async (err, result) => {
  let s_no = 1;
  result.map((data) => {
    data.s_no = s_no;
    ws.addRow(data);
    s_no++;
  });
  ws.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });
  await wb.xlsx.writeFile("./movie.xlsx").then(() => console.log("ok"));
});
