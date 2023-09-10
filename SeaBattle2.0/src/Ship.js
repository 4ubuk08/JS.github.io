class Ship {

    div = null;

    size = null;
    direction = null;
    startX = null;
    startY = null;


    constructor(size, direction, startX, startY, items) {
        Object.assign(this, { size, direction, startX, startY, items });
        const div = document.createElement('div');
        this.div = div;
        div.classList.add('ship');
        div.dataset.direction = direction;
        div.dataset.size = size;
        div.style.left = `${startX}px`;
        div.style.top = `${startY}px`;
        this.setDirection(div);


        div.addEventListener("mousedown", (this.shipMoveStart));
        div.addEventListener("dblclick", () => this.setDirection(div, true));


        // for (let i = 0; i < this.ships.length; i++) {
        //     const element = this.ships[i];
        //     // element.addEventListener("mousedown", this.shipMoveStart);
        //     element.addEventListener("mousedown", (this.shipMoveStart));
        //     element.addEventListener("dblclick", () => this.setDirection(element, true));
        // }
    }


    shipMoveStart(element) {
        element.preventDefault();
        const ship = element.target;
        const parent = ship.parentElement.parentElement;

        let { x, y } = ship.getBoundingClientRect();
        let { left, top } = parent.getBoundingClientRect();

        const posX = x - left;
        const posY = y - top;

        const addX = x;
        const addY = y;


        const differenceX = element.clientX - x;
        const differenceY = element.clientY - y;

        /* console.log(parent.getBoundingClientRect());
        console.log(element.clientX, element.clientY);
        console.log(x, y);
        console.log(ship.getBoundingClientRect()); */



        ship.style.position = "absolute";
        ship.style.left = `${posX}px`;
        ship.style.top = `${posY}px`;

        document.addEventListener('mousemove', shipMove);
        // ship.addEventListener('mouseleave', shipMove);
        ship.addEventListener('mouseup', shipStop)

        function shipMove(element) {
            // console.log({ element });
            element.preventDefault();
            ship.style.left = `${element.x - differenceX - left}px`;
            ship.style.top = `${element.y - differenceY - top}px`;
            // console.log(element.x, element.y);
        }

        //     // Event.preventDefault();
        //     const ship = element.target;
        //     let x = element.x;
        //     let y = element.y;

        //     ship.style.left = `${x}px`;
        //     ship.style.top = `${y}px`;
        // }

        function shipStop(element) {
            console.log("щзы");
            const ship = element.target;
            const { x, y } = ship.getBoundingClientRect();

            const battlefield = ship.parentElement.previousSibling;
            const { top, left, width, height } = battlefield.getBoundingClientRect();

            //если корабль над игровым полем
            if (left <= x && x <= left + width && top <= y && y <= top + height) {

                let posX = null;
                let posY = null;

                let itemX = null;
                let itemY = null;

                
                const items = app.player.items.flat();
                //проверяем над какой конкретно ячейкой
                for (let index = 0; index < items.length; index++) {
                    const item = items[index];

                    itemX = item.dataset.x;
                    itemY = item.dataset.y;

                    const { top, left, width, height } = item.getBoundingClientRect();
                    //если нашли нужную ячейку, записываем её координаты
                    if (left <= x && x <= left + width && top <= y && y <= top + height) {
                        posX = left;
                        posY = top;
                        break;
                    }
                }

            //     for(let i = 0; i <= ship.dataset.size; i++){
            //         const item = app.player.matrix[itemY][itemX+i];
            //    item.ship = ship;
            //     console.log(app.player.matrix)

                ship.style.left = `${posX - left}px`;
                ship.style.top = `${posY - top}px`;
                
            };

            // this.ops();
            document.removeEventListener("mousemove", shipMove);
            ship.removeEventListener('mouseup', shipStop);
            console.count();
        }



        // console.log(ship.getBoundingClientRect());
        // console.log(element.x, element.y);

    }


    setDirection(ship, change = false) {
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
}