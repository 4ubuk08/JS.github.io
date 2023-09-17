class Application {
    player = null; 
    computer = null;

    constructor() {
        const playerField = document.querySelector('[data-side="player"]');
        const computerField = document.querySelector('[data-side="computer"]');

        const player = new Battlefield(playerField);
        const computer = new Battlefield(computerField);

        this.player =player;
        this.computer = computer;
    }

    start (ships) { 
        for (const {size, direction, startX, startY} of ships) {
            const ship = new Ship(size, direction, startX, startY);  
            this.player.addShip(ship);
        } 

    }    
}