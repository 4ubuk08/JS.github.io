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
