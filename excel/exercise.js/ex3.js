const xlsx = require("xlsx");

const wb = xlsx.utils.book_new();
const wsData = xlsx.readFile("./movie.xlsx").Sheets['movie'];

console.log(xlsx.utils.sheet_to_json(wsData));
// xlsx.utils.book_append_sheet(wb, ws, "movie");
