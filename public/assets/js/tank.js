class HpHmiTank {

    width = 180;
    height = 210;
    level = 60;

    render() { 
        push();
        // translate(-(this.width/2), -(this.height/2));
        translate(-(this.width/2), -this.height);
        
        stroke(0);
        fill('#c9c9c9');
        rect(this.x, this.y, this.width, this.height);
        bezier(this.x, this.y, this.x+40, this.y+40, this.x+50, this.y+50, this.x+this.width, this.y+this.height);
        // pop();
        // push();
        translate(0, this.height-this.level);
        fill(0,150,255);
        rect(this.x, this.y, this.width, this.level);
        pop();
    }

    move(mouseX, mouseY) {
        if(dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    constructor(point) {
        this.x = point.x;
        this.y = point.y;
        this.data = point.data;
    }
}