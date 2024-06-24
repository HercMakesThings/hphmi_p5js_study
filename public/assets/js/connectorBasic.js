class Connector {

    move(mouseX, mouseY, pointType) {
        switch (pointType) {
            case 'p1':
                this.x1 = mouseX;
                this.y1 = mouseY;
                break;
            case 'control1':
                this.xControl1 = mouseX;
                this.yControl1 = mouseY;
                break;
            case 'control2':
                this.xControl2 = mouseX;
                this.yControl2 = mouseY;
                break;
            case 'p2':
                this.x2 = mouseX;
                this.y2 = mouseY;
                break;
        }
    }

    isChanging() {
        return this.isChanging;
    }

    toggleChange(mouseX, mouseY) {
        // this.isChanging = !this.isChanging;
        if (dist(mouseX, mouseY, this.x1, this.y1) < 20) {
            this.isChanging = !this.isChanging;
            return;
        }
        if (dist(mouseX, mouseY, this.x2, this.y2) < 20) {
            this.isChanging = !this.isChanging;
            return;
        }
        if (dist(mouseX, mouseY, this.xControl2, this.yControl2) < 20) {
            this.isChanging = !this.isChanging;
            return;
        }
        if (dist(mouseX, mouseY, this.xControl1, this.yControl1) < 20) {
            this.isChanging = !this.isChanging;
            return;
        }
    }
    
    render() {
        push();
        // render code goes here
        stroke(93);
        strokeWeight(5);
        point(this.x1, this.y1);
        point(this.x2, this.y2);

        // Draw the control points in red.
        stroke(255, 0, 0);
        strokeWeight(10);
        point(this.xControl2, this.yControl2);
        point(this.xControl1, this.yControl1);

        // Draw a black bezier curve.
        noFill();
        stroke(93);
        strokeWeight(4);
        bezier(this.x1, this.y1, this.xControl1, this.yControl1, this.xControl2, this.yControl2, this.x2, this.y2);
        pop();
        push();
        // Draw red lines from the anchor points to the control points.
        stroke(255, 0, 0);
        line(this.x2, this.y2, this.xControl2, this.yControl2);
        line(this.x1, this.y1, this.xControl1, this.yControl1);
        // end render code
        pop();
    }

    constructor(x1, y1, xControl1, yControl1, xControl2, yControl2, x2, y2, isChanging) {
        this.x1 = x1;
        this.y1 = y1;
        this.xControl1 = xControl1;
        this.yControl1 = yControl1;
        this.xControl2 = xControl2;
        this.yControl2 = yControl2;
        this.x2 = x2;
        this.y2 = y2;
        this.isChanging = isChanging;
    }
    // constructor(x1, y1, xControl1, yControl1, xControl2, yControl2, x2, y2, isChanging) {
    //     this.x1 = x1;
    //     this.y1 = y1;
    //     this.xControl1 = xControl1;
    //     this.yControl1 = yControl1;
    //     this.xControl2 = xControl2;
    //     this.yControl2 = yControl2;
    //     this. x2 = x2;
    //     this.y2 = y2;
    //     this.isChanging = isChanging;
    // }
}