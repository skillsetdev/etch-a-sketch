let grid = document.getElementById("grid");
let isMouseDown = false;

// Function to handle mouse over event
function handleMouseOver(event) {
  if (isMouseDown) {
    if (event.target.tagName === "DIV") {
      event.target.style.backgroundColor = "red";
    }
  }
}

function handleMouseDown() {
  isMouseDown = true;
}

function handleMouseUp() {
  isMouseDown = false;
}

document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("mouseover", handleMouseOver);

for (let i = 1; i < 70; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flexDirection = "row";
  row.style.justifyContent = "stretch";
  row.style.flexGrow = "1";

  for (let i = 1; i < 70; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.flexGrow = "1";
    row.appendChild(div);
  }

  grid.appendChild(row);
}
