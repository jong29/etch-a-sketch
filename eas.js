const maindiv = document.getElementById("main");

let columns = 16;
let rows = 16;

let grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div'); // create column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let row = document.createElement('div'); // create row
        row.className = 'row';
        row.addEventListener("mouseover", (e) => {
            e.target.classList.add('color');
        });
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
maindiv.appendChild(grid);

document.getElementById("clear").addEventListener("click", () => {
    const colored = document.querySelectorAll(".row.color");
    colored.forEach((box) => {
        box.classList.remove('color');
    } );
});