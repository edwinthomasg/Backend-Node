const express = require("express");
const excel = require("xlsx");
const excelJs = require("exceljs");

const app = express();

app.use(express.json());

app.get("/sheet", (req, res) => {
  const wb = excel.readFile("./test.xlsx", { cellDates: true });
  const ws = wb.Sheets["Updated Sheet"];
  const data = excel.utils.sheet_to_json(ws);
  res.send(data);
});

app.post("/", (req, res) => {
  const wb = excel.utils.book_new();
  excel.utils.book_append_sheet(
    wb,
    excel.utils.json_to_sheet(req.body),
    "New Sheet"
  );
  console.log(wb.SheetNames);
  excel.writeFile(wb, "newDoc.xlsx");
});

app.post("/excel-js", async (req, res) => {
  const wb = new excelJs.Workbook();
  const ws = wb.addWorksheet("employee");
  ws.columns = [
    { header: "Name", key: "name", width: 10 },
    { header: "Age", key: "age", width: 10 },
    { header: "Company", key: "company", width: 10 },
    { header: "Stack", key: "stack", width: 10 },
    { header: "Location", key: "location", width: 10 },
    { header: "Joined", key: "joined", width: 10 },
  ];
  let sno = 1;
  req.body.forEach((emp) => {
    emp.sno = sno;
    emp.joined = new Date(emp.joined);
    ws.addRow(emp);
    sno++;
  });
  ws.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });
  await wb.xlsx.writeFile("generatedFile.xlsx");
  const data = excel.readFile("./generatedFile.xlsx", { cellDates: true });
  const employeeWorkSheet = data.Sheets["employee"];
  res.send(excel.utils.sheet_to_json(employeeWorkSheet));
});

app.listen(3020, () =>
  console.log("server listening on port http://localhost:3020")
);
