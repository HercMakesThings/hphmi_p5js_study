class Meteor{
    constructor(x, y, r, speed){
        this.x = x;
        this.y = y;
        this.r = r;
        this.pos = createVector(this.x, this.y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(speed);
        this.alpha = 255;
        this.exploded = false;
        this.total = Math.floor(Math.random() * (15-5) + 5);
        this.offset = [];
        for(let i = 0; i < this.total; i++){
            this.offset[i] = Math.floor(Math.random() * ((this.r*0.5) + this.r*0.5) - this.r*0.5);
        }
        //pop meteor from array if it gets too small
        if(this.r < 16){
            this.exploded = true;
        }
    }

    // fall(){
    //     push();
    //         let xWiggle = (Math.random() * (4 + 4) - 4) + this.pos.x;
    //         // fill(0);
    //         // stroke(255, this.alpha);
    //         fill(75, 0, 130, this.alpha);
    //         strokeWeight(4);
    //         translate(xWiggle, this.pos.y);
    //         ellipse(0, 0, this.r*2);
    //         // console.log(this.pos.y);
    //         // this.landed();
    //         if(this.pos.y <= 350){
    //             // this.y = this.y + 0.5;
    //             this.pos.add(this.vel);
    //         } else if(this.pos.y > 400) {
    //             // this.pos.y = this.pos.y;
    //             this.vel.y = 0;
    //         }
    //     pop();
    // }

    float(){
        push();
            fill(70, 200, 185, this.alpha);
            strokeWeight(4);
            translate(this.pos.x, this.pos.y);
            // ellipse(0, 0, this.r*2);
            beginShape();
                for(let i = 0; i < this.total; i++){
                    let asteroid_angle = map(i, 0, this.total, 0, TWO_PI);
                    let r = this.r + this.offset[i];
                    let x = r*cos(asteroid_angle);
                    let y = r*sin(asteroid_angle);
                    vertex(x, y);
                }
            endShape(CLOSE);
        pop();
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

    update(){
        this.pos.add(this.vel);
    }

    explodes(){
        // this.alpha -= 75;
        // if(this.alpha < 100){
        //     this.exploded = true;
        // }
        this.exploded = true;
    }

    hits(blaster){
        let prox = dist(this.pos.x, this.pos.y, blaster.pos.x, blaster.pos.y);
        if(prox < this.r + blaster.r){
            return (prox < this.r + blaster.r);
        }
    }

    breakup(){
        let newMeteorArr = [];
        newMeteorArr[0] = new Meteor(this.pos.x, this.pos.y, this.r*0.75, 0.9);
        newMeteorArr[1] = new Meteor(this.pos.x, this.pos.y, this.r*0.75, 0.9);
        return newMeteorArr;
    }

    // landed(){
    //     if(this.pos.y <= 400){
    //         // this.y = this.y + 0.5;
    //         this.pos.add(this.vel);
    //     } else if(this.pos.y > 400) {
    //         // this.pos.y = this.pos.y;
    //         this.vel.y = 0;
    //     }
    // }
}