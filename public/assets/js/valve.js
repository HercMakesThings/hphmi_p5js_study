class HpHmiValve {

    render() {
        push();
        stroke(0);
        // strokeWeight(5);
        line(this.x, this.y, this.x, this.y+35);
        pop();
        push();
        translate(-30, 35);
        stroke(0);
        fill(255);
        rect(this.x, this.y, 60, 35);
        pop();
        push();
        fill('#c9c9c9');
        stroke(0);
        beginShape();
        vertex(this.x+40, this.y+30);
        vertex(this.x+40, this.y-30);
        vertex(this.x-40, this.y+30);
        vertex(this.x-40, this.y-30);
        endShape(CLOSE);
        pop();
    }

    move(mouseX, mouseY) {
        if (dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    constructor(point) {
        this.x = point.x;
        this.y = point.y;
        this.isChanging = point.isChanging;
        this.data = point.data;
    }
}