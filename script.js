function populateGrid(size) {
    // select container and create column and rows
    const gridContainer = document.querySelector('#grid-container')
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`

    // for loop to repeat grid, then append to container
for (let i = 0; i<256; i++) {
    let square = document.createElement('div')
    square.style.backgroundColor = 'grey';
    gridContainer.insertAdjacentElement('beforeend', square)
}
}
populateGrid(16)