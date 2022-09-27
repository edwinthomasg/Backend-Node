let gridOptions = {
  columnDefs: [
    { field: "athlete", type: "noAutoResize" },
    { field: "age" },
    { field: "year", minWidth: 300 },
    { field: "country" },
    { field: "date" },
    { field: "total" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ],
  defaultColDef: {
    resizable: true,
    width: 150
  },
  columnTypes: {
    noAutoResize: { suppressSizeToFit: true }
  },
  onGridReady: () => {
    console.log(gridOptions.api.getColumnDefs())
  },
  onColumnResized: (event) => console.log(gridOptions.api.getColumnDefs())
};
let participantGroup = () => [
  {
    headerName: "Participant",
    children: [
      { field: "athlete" },
      { field: "age" },
      { field: "year" },
      { field: "country" },
      { field: "date" },
    ],
  },
  { field: "total" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
];
let medalsGroup = () => [
  { field: "athlete" },
  { field: "age" },
  { field: "year" },
  { field: "country" },
  { field: "date" },
  {
    headerName: "Medals",
    children: [
      { field: "total" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
    ],
  },
];
let medalsParticipantGroup = () => [
  {
    headerName: "Participant",
    children: [
      { field: "athlete" },
      { field: "age" },
      { field: "year" },
      { field: "country" },
      { field: "date" },
    ],
  },
  {
    headerName: "Medals",
    children: [
      { field: "total" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
    ],
  },
];
let noGroup = () => gridOptions.api.setColumnDefs(gridOptions.columnDefs);
let participant = () => gridOptions.api.setColumnDefs(participantGroup());
let medals = () => gridOptions.api.setColumnDefs(medalsGroup());
let participant_medals = () => gridOptions.api.setColumnDefs(medalsParticipantGroup());
let resize = () => {
    gridOptions.api.sizeColumnsToFit({
        defaultMinWidth: 200,
        columnLimits: [{ key: "age", minWidth: 500 }]
    })
}
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
