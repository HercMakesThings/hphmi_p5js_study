class Pump {

    render(p) {
        p.push();
        p.fill(40)
        if (this.data.point_status.value === 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        p.translate(30, -20);
        p.beginShape();
        p.vertex(this.x-30, this.y-20);
        p.vertex(this.x-30, this.y+20);
        p.vertex(this.x+30, this.y+20);
        p.vertex(this.x+30, this.y-20);
        p.endShape(p.CLOSE);
        p.pop();
        p.push();
        p.fill(40);
        if (this.data.point_status.value === 'ON') {
            p.fill('#c9c9c9');
        }
        p.stroke(0);
        p.circle(this.x, this.y, this.d);
        p.circle(this.x, this.y, this.d-45);
        p.pop();

        // push();
        // fill(40)
        // if (this.data.point_status.value === 'ON') {
        //     fill('#c9c9c9');
        // }
        // stroke(0);
        // translate(30, -20);
        // beginShape();
        // vertex(this.x-30, this.y-20);
        // vertex(this.x-30, this.y+20);
        // vertex(this.x+30, this.y+20);
        // vertex(this.x+30, this.y-20);
        // endShape(CLOSE);
        // pop();
        // push();
        // fill(40);
        // if (this.data.point_status.value === 'ON') {
        //     fill('#c9c9c9');
        // }
        // stroke(0);
        // circle(this.x, this.y, this.d);
        // circle(this.x, this.y, this.d-45);
        // pop();
    }

    move(p, mouseX, mouseY) {
        if (p.dist(mouseX, mouseY, this.x, this.y) < 20) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    // isChanging() {
    //     return this.isChanging;
    // }

    // toggleChange(mouseX, mouseY) {
    //     if(dist(mouseX, mouseY, this.x1, this.y) < 20) {
    //         this.isChanging = !this.isChanging;
    //     }
    // }

    constructor(point, radius) {
        this.r = radius;
        this.d = this.r*2;
        this.x = point.x;
        this.y = point.y;
        // this.isChanging = point.isChanging;
        this.data = point.data;

        // this.p = p;
    }
}