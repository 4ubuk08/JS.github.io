class ClockSVGWiew {
    constructor(size, name, top, left) {

        this.Mymodel = null;
        this.MyDOM = null;
        this.sec;
        this.minut;
        this.hour;
        this.cont;
        this.cont2;
        this.space;
        this.tablo;
        this.tabloCenterX;
        this.tabloCenterY;
        this.hoursPos;
        this.minutePos;
        this.secondsPos;
        this.size = size;
        this.name = name;
        this.left = left;
        this.top = top;
        this.logo;
        this.but1;
        this.but2;
        this.text;
        this.pass;
    };

    start(model, DOM) {
        this.Mymodel = model;
        this.DOM = DOM;
        this.pass = this.Mymodel.pass;
    }


    create() {
        const clockR = this.size;
        this.space = clockR * 0.1;
        const longH = clockR * 0.4;
        const longM = clockR * 0.7;
        const longS = clockR * 0.9;
        const numberR = clockR * 0.15;
        this.tabloCenterX = this.space + clockR;
        this.tabloCenterY = this.space + clockR;


        this.cont2 = document.createElement("div");
        this.cont2.style.position = "relative";
        this.cont2.style.left = this.left + 'px';
        this.cont2.style.width = this.size*2.2 + 'px';
/*         cont2.style.top = 600 + 'px';  */
        this.logo = document.createElement('div');
        this.cont2.appendChild(this.logo);

        this.but1 = document.createElement('input');
        this.but2 = document.createElement('input');
        this.but1.id = "" + this.name + "start";
        this.but2.id = "" + this.name + "stop";
        this.but1.value = "Старт";
        this.but2.value = "Стоп";
        this.but1.style.width = 70 + "px";
        this.but2.style.width = 70 + "px";
        this.but1.style.cursor = "pointer";
        this.but2.style.cursor = "pointer";
        this.logo.appendChild(this.but1);
        this.logo.appendChild(this.but2);

        this.text = document.createElement('span');
        this.logo.appendChild(this.text);
        this.text.innerHTML = "" + this.name + "    (GMT+" + this.pass + ")";

        this.cont = document.createElementNS('http://www.w3.org/2000/svg', 'svg');   
        this.cont.setAttribute("width", clockR*2.2);
        this.cont.setAttribute("height", 400);
        this.cont2.appendChild(this.cont);

        this.cont.setAttribute("xmlns","http://www.w3.org/2000/svg");
        this.tablo = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        this.cont.appendChild(this.tablo);
        /* this.tablo.setAttribute("stroke", "black"); */
        this.tablo.setAttribute("fill", "yellow");
        this.tablo.setAttribute("r", clockR);
        this.tablo.setAttribute("cx", this.tabloCenterX);
        this.tablo.setAttribute("cy", this.tabloCenterY);
        document.body.appendChild(this.cont2);

       let startAngle = 360;
        let startNumber = 12;
        for (let i = 0; i < 12; i++) {


            let number = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            /* number.setAttribute("stroke", "black"); */
            number.setAttribute("fill", "green");
            number.setAttribute("r", numberR);

            let numberCenterX = this.tabloCenterX + clockR * 0.8 * Math.sin(startAngle / 180 * Math.PI);
            let numberCenterY = this.tabloCenterY - clockR * 0.8 * Math.cos(startAngle / 180 * Math.PI);

            number.setAttribute("cx", Math.round(numberCenterX));
            number.setAttribute("cy", Math.round(numberCenterY));
            this.cont.appendChild(number);


            let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            text.textContent = startNumber;
            text.style.fill = "black";
            text.setAttribute("text-anchor", "middle");
            this.cont.appendChild(text);

            text.setAttribute("x", Math.round(numberCenterX));
            text.setAttribute("y", Math.round(numberCenterY));


            startAngle -= 30;
            startNumber -= 1;
        }

/*                  let timer = document.createElementNS("http://www.w3.org/2000/svg",'text');
                    timer.textContent="00:00:00";
                    cont.appendChild(timer);
                    timer.setAttribute("x",timerX);
                        timer.setAttribute("y",timerY); */

                        this.sec = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                        this.sec.setAttribute("x1", this.tabloCenterX);
                        this.sec.setAttribute("y1", this.tabloCenterY);
                        this.sec.setAttribute("x2", this.tabloCenterX);
                        this.sec.setAttribute("y2", this.tabloCenterY - longS);
                        this.sec.setAttribute("stroke", "black");
                        this.sec.setAttribute("stroke-width", 2);
                        this.sec.setAttribute("stroke-linecap", "round");
                        this.cont.appendChild(this.sec);


                        this.minut = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                        this.minut.setAttribute("x1", this.tabloCenterX);
                        this.minut.setAttribute("y1", this.tabloCenterY);
                        this.minut.setAttribute("x2", this.tabloCenterX);
                        this.minut.setAttribute("y2", this.tabloCenterY - longM);
                        this.minut.setAttribute("stroke", "black");
                        this. minut.setAttribute("stroke-width", 3);
                        this.minut.setAttribute("stroke-linecap", "round");
                        this.cont.appendChild(this.minut);


                        this.hour = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                        this.hour.setAttribute("x1", this.tabloCenterX);
                        this.hour.setAttribute("y1", this.tabloCenterY);
                        this.hour.setAttribute("x2", this.tabloCenterX);
                        this.hour.setAttribute("y2", this.tabloCenterY - longH);
                        this.hour.setAttribute("stroke", "black");
                        this.hour.setAttribute("stroke-width", 5);
                        this.hour.setAttribute("stroke-linecap", "round");
                        this.cont.appendChild(this.hour);

    }

    update() {
        this.secondsPos = this.Mymodel.nowSeconds * 6;
        this.minutePos = this.Mymodel.nowMinutes * 6 + this.Mymodel.nowSeconds * 0.1;
        this.hoursPos = this.Mymodel.nowHours * 30 + this.Mymodel.nowMinutes * 0.5;
       
        
        /* timer.textContent = str0l(nowHours) + ':' + str0l(nowMimutes) + ':' + str0l(nowSeconds); */

        this.sec.setAttribute("transform", "rotate(" + this.secondsPos + " " + this.tabloCenterX + " " + this.tabloCenterY + ")");
        this.minut.setAttribute("transform", "rotate(" + this.minutePos + " " + this.tabloCenterX + " " + this.tabloCenterY + ")");
        this.hour.setAttribute("transform", "rotate(" + this.hoursPos + " " + this.tabloCenterX + " " + this.tabloCenterY + ")");

    }
}
