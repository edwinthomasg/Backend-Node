let dateComparator = (date1, date2) => {
  console.log(formatDate(date1));
  console.log(formatDate(date2));
  return formatDate(date1) - formatDate(date2);
};

let formatDate = (date) => {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  const year = Number.parseInt(date.substring(6, 10));
  const month = Number.parseInt(date.substring(3, 5));
  const day = Number.parseInt(date.substring(0, 2));
  return year * 10000 + month * 100 + day;
};

let columnDefs = () => {
  return [
    { field: "athlete", sort: "desc" },
    { field: "age", width: 90 },
    { field: "country" },
    { field: "year", width: 90, unSortIcon: true },
    { field: "date", comparator: dateComparator },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
};

let gridOptions = {
  columnDefs: columnDefs(),
  rowData: null,
  defaultColDef: {
    sortable: true,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((res) => gridOptions.api.setRowData(res));
