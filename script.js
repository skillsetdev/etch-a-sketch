let grid = document.getElementById("grid");
for (let i = 1; i < 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flexDirection = "row";
  row.style.justifyContent = "stretch";
  row.style.flexGrow = "1";

  for (let i = 1; i < 16; i++) {
    const div = document.createElement("div");
    div.style.border = "2px solid black";
    div.style.flexGrow = "1";
    row.appendChild(div);
  }

  grid.appendChild(row);
}
