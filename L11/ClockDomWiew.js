class ClockDomWiew {
    constructor(size, name, top, left) {
        this.Mymodel = null;
        this.sec;
        this.minut;
        this.hour;
        this.cont;
        this.tablo;
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

    start(model) {
        this.Mymodel = model;
        this.pass = this.Mymodel.pass;

    create() {
        const clockR = this.size;
        const longH = clockR * 0.4;
        const longM = clockR * 0.7;
        const longS = clockR * 0.9;
        const numberR = clockR * 0.25;

        this.cont = document.createElement('div');
        document.body.appendChild(this.cont);
        this.cont.style.position = "relative";
        this.cont.style.left = this.left + "px;"
        this.cont.style.top = this.top + 'px';

        this.logo = document.createElement('div');
        this.cont.appendChild(this.logo);

        this.but1 = document.createElement('input');
        this.but2 = document.createElement('input');
        this.but1.style.id = "" + this.name + "but1";
        this.but1.type = "button";
        this.but2.type = "button";
        this.but1.value = "Стоп";
        this.but2.value = "Старт";
        this.but1.style.width = 70 + "px";
        this.but2.style.width = 70 + "px";
        this.but2.style.id = "" + this.name + "but2";
        this.logo.appendChild(this.but1);
        this.logo.appendChild(this.but2);

        this.text = document.createElement('span');
        this.logo.appendChild(this.text);
        this.text.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.name + "    (GMT+" + this.pass + ")";

        this.tablo = document.createElement('div');
        this.cont.appendChild(this.tablo);
        this.tablo.style.width = clockR * 2 + 'px';
        this.tablo.style.height = clockR * 2 + 'px';
        this.tablo.style.position = "absolute";
        this.tablo.style.left = 0 + 'px';
        this.tablo.style.top = 30 + 'px';
        this.tablo.style.borderRadius = "50%";
        this.tablo.style.backgroundColor = 'yellow';


        const tabloCenterX = this.tablo.offsetLeft + clockR;
        const tabloCenterY = this.tablo.offsetTop + clockR - 30;




        let startAngle = 360;
        let startNumber = 12;
        for (let i = 0; i < 12; i++) {


            let number = document.createElement('div');
            number.classList.add("numbers")
            number.innerHTML = startNumber;
            this.tablo.appendChild(number);
            number.style.position = "absolute";
            number.style.backgroundColor = "green";
            number.style.borderRadius = "50%";
            number.style.height = numberR + 'px';
            number.style.width = numberR + 'px';
            number.style.lineHeight = numberR + 'px';
            number.style.textAlign = 'center';


            let numberCenterX = tabloCenterX + clockR * 0.85 * Math.sin(startAngle / 180 * Math.PI);
            let numberCenterY = tabloCenterY - clockR * 0.85 * Math.cos(startAngle / 180 * Math.PI);

            number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + 'px';
            number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + 'px';

            startAngle -= 30;
            startNumber -= 1;
        }

        this.hoursPos = this.Mymodel.nowHours * 30 + this.Mymodel.nowMinutes * 0.5;
        this.minutePos = this.Mymodel.nowMinutes * 6 + this.Mymodel.nowSeconds * 0.1;
        this.secondsPos = this.Mymodel.nowSeconds * 6;


        this.hour = document.createElement('div');
        this.tablo.appendChild(this.hour);
        this.hour.classList.add('hour');
        this.hour.id = "" + this.name + "hour";
        this.hour.style.position = "absolute";
        this.hour.style.left = tabloCenterX - this.hour.offsetWidth / 2 + 'px';
        this.hour.style.top = tabloCenterY - longH * 0.9 + 'px';
        this.hour.style.transformOrigin = '50% ' + longH * 0.9 + 'px';
        this.hour.style.height = longH + 'px';

        this.minut = document.createElement('div');
        this.tablo.appendChild(this.minut);
        this.minut.classList.add('minut');
        this.minut.id = "" + this.name + "minut";
        this.minut.style.position = "absolute";
        this.minut.style.left = tabloCenterX - this.minut.offsetWidth / 2 + 'px';
        this.minut.style.top = tabloCenterY - longM * 0.9 + 'px';
        this.minut.style.transformOrigin = '50% ' + longM * 0.9 + 'px';
        this.minut.style.height = longM + 'px';

        this.sec = document.createElement('div');
        this.tablo.appendChild(this.sec);
        this.sec.classList.add('sec');
        this.sec.id = "" + this.name + "sec";
        this.sec.style.position = "absolute";
        this.sec.style.left = tabloCenterX - this.sec.offsetWidth / 2 + 'px';
        this.sec.style.top = tabloCenterY - longS * 0.9 + 'px';
        this.sec.style.height = longS + 'px';
        this.sec.style.transformOrigin = '50% ' + longS * 0.9 + 'px';

        this.sec.style.transform = 'rotate(' + this.secondsPos + 'deg)';
        this.minut.style.transform = 'rotate(' + this.minutePos + 'deg)';
        this.hour.style.transform = 'rotate(' + this.hoursPos + 'deg)';

    }

    update() {
    
        this.hoursPos = this.Mymodel.nowHours * 30 + this.Mymodel.nowMinutes * 0.5;
        this.minutePos = this.Mymodel.nowMinutes * 6 + this.Mymodel.nowSeconds * 0.1;
        this.secondsPos = this.Mymodel.nowSeconds * 6;
    
        this.hour = document.getElementById("" + this.name + "hour");
        this.minut = document.getElementById("" + this.name + "minut");
        this.sec = document.getElementById("" + this.name + "sec");
    
        this.sec.style.transform = 'rotate(' + this.secondsPos + 'deg)';
        this.minut.style.transform = 'rotate(' + this.minutePos + 'deg)';
        this.hour.style.transform = 'rotate(' + this.hoursPos + 'deg)';
    }
}