console.log('hello pidar!');

const app = new Application();

const shipDatas = [
    { size: 4, direction: "row", startX: 3, startY: 380 },
    { size: 3, direction: "row", startX: 3, startY: 425 },
    { size: 3, direction: "row", startX: 113, startY: 425},
    { size: 2, direction: "row", startX: 3, startY: 470 },
    { size: 2, direction: "row", startX: 81, startY: 470 },
    { size: 2, direction: "row", startX: 160, startY: 470 },
    { size: 1, direction: "row", startX: 3, startY: 515 },
    { size: 1, direction: "row", startX: 48, startY: 515},
    { size: 1, direction: "row", startX: 93, startY: 515 },
    { size: 1, direction: "row", startX: 138, startY: 515 },
];



app.start(shipDatas);

// const playerField = document.querySelector('[data-side="player"]');
// const computerField = document.querySelector('[data-side="computer"]');

/* function createField (div) {
    const field = document.createElement('div');
    field.classList.add("battle-field");

    const table = document.createElement('table');
    table.classList.add('battle-table');

    const shipyard = document.createElement('div');
    shipyard.classList.add("battle-shipyard");

    field.appendChild(table);
    field.appendChild(shipyard);

    div.appendChild(field);

for (let y= 0; y <10; y++) {
    const row = document.createElement('tr');
    row.classList.add("table-row");
    // row.dataset.y = y;
    for (let x = 0; x < 10; x++){
        const item = document.createElement('td');
        item.classList.add("table-item");
        item.dataset.x = x;
        item.dataset.y = y;

        row.append(item);
    }
    table.append(row);

}

    
} */

// const playerBattlefield = new Battlefield(playerField);
// const computerBattlefield = new Battlefield(computerField);



// for (let y = 4; y > 0 ; y--) {
//     for (let x = y; x <=4; x++) {
//     const ship = document.createElement('div');
//     ship.classList.add('ship', 'ship-row-'+y)
//     playerBattlefield.shipyard.append(ship);
//     console.log({ship});
//     }
// }


// const playerShip = new Ship(app.player, 4, 'row', 10-7, 345+35);
// const computerShip = new Ship(app.computer);