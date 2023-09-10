class Mouse {

    element =null;

    x = null;
    y = null;

    pX = null;
    pY = null;

    under = false;
    pUnder = false;

    left = false;
    pLeft = false;

    delta = 0;
    pDelta = 0;
    
    constructor(element) {
        this.element = element;

        element.addEventListener('mousemove', e);
        element.addEventListener('mouseenter', e);
        element.addEventListener('mouseleave', e);
        element.addEventListener('mousedown', e);
        element.addEventListener('mouseup', e);
        element.addEventListener('wheel', e);
    }

    tick () {
        this.pX= this.x;
        this.py= this.y;
        this.pUnder = this.under;
        this.pLeft = this.left;
        this.pDelta = this.delta;

    }
}