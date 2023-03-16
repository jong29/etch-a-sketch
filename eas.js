
function createGrid(dimension) {
    const maindiv = document.getElementById("main");
    
    let columns = dimension;
    let rows = dimension;
    
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
}
createGrid(16);

document.getElementById("clear").addEventListener("click", () => {
    const colored = document.querySelectorAll(".row.color");
    colored.forEach((box) => {
        box.classList.remove('color');
    } );
});

document.getElementById("dims").addEventListener("click", () => {
    let size = prompt("Enter Number of Squares on the side of the grid: ");
    
    while (size > 100) {
        size = prompt("Enter a Number less than 100: ");
    }
    const mainNode = document.getElementById("main");
    mainNode.innerHTML = '';
    createGrid(size);
});