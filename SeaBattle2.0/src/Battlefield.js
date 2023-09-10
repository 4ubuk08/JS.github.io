class Battlefield {
    ships =[];
    shoots = [];

    field = null;
    table = null;
    shipyard = null;

    items = [];
    matrix = [];    

    constructor(div) {

        const field = document.createElement('div');
        field.classList.add("battle-field");

        const table = document.createElement('table');
        table.classList.add('battle-table');

        const shipyard = document.createElement('div');
        shipyard.classList.add("battle-shipyard");

        Object.assign(this, { field, table, shipyard });

        field.appendChild(table);
        field.appendChild(shipyard);

        div.appendChild(field);

        for(let y = 0; y < 10; y++ ) {
            const row = []
            for(let x = 0; x < 10; x++){
            const cell = {x, y, ship: null, open: true};
            row.push(cell);
            }
            this.matrix.push(row);
        }

        for (let y = 0; y < 10; y++) {
            const row = [];
            const tr = document.createElement('tr');
            tr.classList.add("table-row");
            tr.dataset.y = y;
            for (let x = 0; x < 10; x++) {
                const td = document.createElement('td');
                td.classList.add("table-item");
                td.dataset.x = x;
                td.dataset.y = y;
                td.dataset.open = true;
                td.addEventListener('mouseup', () => console.log(td));
                tr.append(td);
                row.push(td);
            }
            table.append(tr);
            this.items.push(row);
        }

        for (let x=0; x<10; x++) {
            const item = this.items[0][x];
            const marker = document.createElement('div');
            marker.classList.add('marker', 'marker-column');
            marker.textContent = "АБВГДЕЖЗИК"[x];
            item.appendChild(marker);
        }

        for (let y =0; y<10; y++) {
            const item =this.items[y][0];
            const marker = document.createElement('div');
            marker.classList.add('marker', 'marker-row');
            marker.textContent = y+1;
            item.appendChild(marker);
        }


    }

    addShip (ship) {
            this.ships.push(ship);
            this.shipyard.append(ship.div);
    }
    removeShip (ship) {
        const index = this.ships.indexOf(ship);
        this.ships.splice(index, 1);
    }
    removeAllShips (){}

    addShoot () {}
    removeShoot () {}
    removeAllShoots (){}


}