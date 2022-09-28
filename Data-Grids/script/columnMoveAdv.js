const columnDefs = [
  {
    lockPosition: "left",
    valueGetter: "node.rowIndex",
    width: 60,
    suppressNavigable: true,
  },
  {
    field: "empty",
    lockPosition: "left",
    width: 120,
    suppressNavigable: true,
  },
  { field: "athlete" },
  { field: "age" },
  { field: "country" },
  { field: "year" },
  { field: "date" },
  { field: "sport" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    width: 150,
    resizable: true,
  },
  onColumnPinned: onColumnPinned,
  suppressDragLeaveHidesColumns: true,
};

function onColumnPinned(event) {
//   console.log("triggered");
  const allCols = event.columnApi.getAllGridColumns();
//   console.log(allCols);
  const allFixedCols = allCols.filter((col) => col.getColDef().lockPosition);
//   console.log(allFixedCols)
  const allNonFixedCols = allCols.filter(
    (col) => !col.getColDef().lockPosition
  );
//   console.log(allNonFixedCols)
  const pinnedCount = allNonFixedCols.filter(
    (col) => col.getPinned() === "left"
  ).length;

  const pinFixed = pinnedCount > 0;

  const columnStates = [];
  allFixedCols.forEach((col) => {
    if (pinFixed !== col.isPinned()) {
        console.log(col)
      columnStates.push({
        colId: col.getId(),
        pinned: pinFixed ? "left" : null,
      });
      console.log(columnStates)
    }
  });

  if (columnStates.length > 0) {
    event.columnApi.applyColumnState({ state: columnStates });
    console.log(gridOptions.columnApi.getColumnState())
  }
}

function onPinAthlete() {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", pinned: "left" }],
  });
}

function onUnpinAthlete() {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", pinned: null }],
  });
}

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);

  fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});
