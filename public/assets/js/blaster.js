class Blaster{
    constructor(){
        this.x = width/2;
        this.y = height;
        this.r = 40;
        this.pos = createVector(this.x, this.y);
        this.heading = 0;
        this.rotation = 0;
        this.vel = createVector(0,0);
        // this.acc = createVector(0,0);
        this.isBoosting = false;
    }

    show(){
        push();
            translate(this.pos.x, this.pos.y);
            // fill(255);
            rotate(this.heading);
            // stroke(255);
            stroke(245, 66, 209);
            strokeWeight(2);
            fill(0);
            // beginShape(TRIANGLE_STRIP);
            //     vertex(0, 0);
            //     vertex(60, 0);
            //     vertex(-60, 0);
            //     vertex(0, -100);
            // endShape(CLOSE);
            triangle(this.r, this.r, -this.r, this.r, 0, -this.r);
        pop();
    }

    setRotation(ang){
        this.rotation = ang;
    }

    aim(){
        this.heading += this.rotation;
    }

    update(){
        if(this.isBoosting){
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.95);
    }

    boost(){
        let force = p5.Vector.fromAngle(this.heading - HALF_PI);
        this.vel.add(force);
    }

    boosting(b){
        this.isBoosting = b;
    }

    boundaries(){
        if(this.pos.x > width + this.r){
            this.pos.x = -this.r;
        }else if(this.pos.x < -this.r){
            this.pos.x = width + this.r;
        }else if(this.pos.y > height + this.r){
            this.pos.y = -this.r
        }else if(this.pos.y < -this.r){
            this.pos.y = height + this.r;
        }
    }

    hits(meteor){
        let prox = dist(this.pos.x, this.pos.y, meteor.pos.x, meteor.pos.y);
        if(prox < this.r + meteor.r){
            return (prox < this.r + blaster.r);
        }
    }
}