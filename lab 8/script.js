const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const output = document.getElementById("output");

// Create a row 
function createRow(leftValue = "", rightValue = "") {
    const row = document.createElement("div");
    row.className = "row";

    // Inputs
    const left = document.createElement("input");
    left.type = "text";
    left.value = leftValue;

    const right = document.createElement("input");
    right.type = "text";
    right.value = rightValue;

    // Move Up button
    const btnUp = document.createElement("button");
    btnUp.textContent = "↑";
    btnUp.onclick = () => {
        if (row.previousElementSibling) {
            container.insertBefore(row, row.previousElementSibling);
        }
    };

    // Move Down button
    const btnDown = document.createElement("button");
    btnDown.textContent = "↓";
    btnDown.onclick = () => {
        if (row.nextElementSibling) {
            container.insertBefore(row.nextElementSibling, row);
        }
    };

    // Delete button
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "x";
    btnDelete.onclick = () => row.remove();

    // Append everything
    row.append(left, right, btnUp, btnDown, btnDelete);
    return row;
}

// Add new row
addBtn.onclick = () => {
    container.appendChild(createRow());
};

// generate JSON object
saveBtn.onclick = () => {
    const rows = container.querySelectorAll(".row");
    let result = {};

    rows.forEach(row => {
        const inputs = row.querySelectorAll("input");
        const key = inputs[0].value.trim();
        const value = inputs[1].value.trim();

        if (key.length > 0) {
            result[key] = value;
        }
    });

    output.textContent = JSON.stringify(result, null, 4);
};
