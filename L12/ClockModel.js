class Clock {
    constructor(pass) {
        this.Myview = null;
        
        this.nowTime;
        this.nowHours;
        this.nowMinutes;
        this.nowSeconds;
        this.pass = pass;
        this.turnon = true;
        this.timerID;
        this.startTimer;
        this.stopTimer;
    };

    start(view) {
        this.Myview = view;
    }

    clockWalk = () => {

        this.nowTime = new Date();
        this.nowHours = this.nowTime.getUTCHours() + this.pass;
        this.nowMinutes = this.nowTime.getUTCMinutes();
        this.nowSeconds = this.nowTime.getUTCSeconds();    
        this.Myview.update();
    

    }

    
    clockStart() {

      this.nowTime = new Date();
        this.nowHours = this.nowTime.getUTCHours() + this.pass;
        this.nowMinutes = this.nowTime.getUTCMinutes();
        this.nowSeconds = this.nowTime.getUTCSeconds();  
                 
        this.Myview.create();

        this.startTimer = document.getElementById(""+this.Myview.name+"start");
        this.stopTimer = document.getElementById(""+this.Myview.name+"stop");

        this.startTimer.addEventListener('click', this.clockStart2, false);
        this.stopTimer.addEventListener('click', this.clockStop, false);
        
        this.clockWalk();
        this.timerID = setInterval(this.clockWalk, 1000);
        this.turnon = true;
        
    }

    clockStop = () => {
        if (this.turnon === true) {
            clearInterval(this.timerID);
            this.turnon = false; 
        } 
    }

    clockStart2 = () => {
        if (this.turnon === false) {
            this.clockWalk();
            this.turnon = true;
        this.timerID = setInterval(this.clockWalk, 1000);
        }
        
    }


}