function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function addFigures(type) {
    const count = Number(document.getElementById("count").value);

    for (let i = 0; i < count; i++) {
        let el = document.createElement("div");
        el.classList.add("shape", type);

        let size = random(40, 150); // random shape size

        if (type === "square" || type === "circle") {
            el.style.width = size + "px";
            el.style.height = size + "px";
        }

        if (type === "triangle") {
            el.style.borderLeftWidth = (size / 2) + "px";
            el.style.borderRightWidth = (size / 2) + "px";
            el.style.borderBottomWidth = size + "px";
        }

        // random position
        el.style.left = random(0, window.innerWidth - size - 20) + "px";
        el.style.top = random(60, window.innerHeight - size - 20) + "px";

        // Single click selects
        el.addEventListener("click", function () {
            document.querySelectorAll(".shape").forEach(s => s.classList.remove("selected"));
            el.classList.add("selected");
        });

        // Double click removes shape
        el.addEventListener("dblclick", function () {
            el.remove();
        });

        document.body.appendChild(el);
    }
}
