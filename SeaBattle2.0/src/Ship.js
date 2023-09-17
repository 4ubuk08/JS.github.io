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
        div.dataset.startX = startX;
        div.dataset.startY = startY;
        div.style.left = `${startX}px`;
        div.style.top = `${startY}px`;
        div.style.cursor = "grab";
        setDirection(div);


        div.addEventListener("mousedown", this.shipMoveStart);
        div.addEventListener("dblclick", () => setDirection(div, true));

    }


    shipMoveStart(element) {
        element.preventDefault();
        const ship = element.target;
        
        ship.style.zIndex = 1000;
        ship.style.cursor = "grabbing"
        const parent = ship.parentElement.parentElement.firstChild;

        //получаем координаты корабля и родительского спозиционированного элемента
        let { x, y } = ship.getBoundingClientRect();
        let { left, top } = parent.getBoundingClientRect();

        //расстояние относительно родителя
        const posX = x - left;
        const posY = y - top;

        const differenceX = element.clientX - x;
        const differenceY = element.clientY - y;

        ship.style.position = "absolute";
        ship.style.left = `${posX}px`;
        ship.style.top = `${posY}px`;

        document.addEventListener('mousemove', shipMove);
        ship.addEventListener('mouseup', shipStop)

        function shipMove(element) {
            element.preventDefault();
            ship.style.left = `${element.x - differenceX - left}px`;
            ship.style.top = `${element.y - differenceY - top}px`;
        }


        function shipStop(element) {
            
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

                console.log(app.player.matrix)

                ship.style.left = `${posX - left}px`;
                ship.style.top = `${posY - top}px`;

                //Если корабль не над игровым полем ставим в первоначальные координаты
            } else {
                ship.dataset.direction = 'column';
                setDirection(ship, true);
                ship.style.left = `${Number(ship.dataset.startX)}px`;
                ship.style.top = `${Number(ship.dataset.startY)}px`;
            };

            // this.ops();
            //    ship.style.cursor = "grab";
            document.removeEventListener("mousemove", shipMove);
            ship.removeEventListener('mouseup', shipStop);

        }



        // console.log(ship.getBoundingClientRect());
        // console.log(element.x, element.y);

    }


    
}