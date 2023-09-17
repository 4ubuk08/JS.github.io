

function setDirection(ship, change = false) {
    if (change === false) {
        ship.classList.remove(`ship-${ship.dataset.direction}-${ship.dataset.size}`);
        ship.classList.add(`ship-${ship.dataset.direction}-${ship.dataset.size}`);
    } else {
        if (ship.dataset.direction === "row") {
            ship.classList.remove(`ship-${ship.dataset.direction}-${ship.dataset.size}`);
            ship.dataset.direction = "column";
            this.setDirection(ship);
        } else {
            ship.classList.remove(`ship-${ship.dataset.direction}-${ship.dataset.size}`);
            ship.dataset.direction = "row";
            this.setDirection(ship);
        }
    }



}