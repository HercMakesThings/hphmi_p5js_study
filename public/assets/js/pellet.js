class Pellet{
    constructor(blastx, blasty, angle){
        this.x = blastx;
        this.y = blasty;
        this.r = 5;
        // this.angle = angle;
        this.pos = createVector(blastx, blasty);
        this.vel = p5.Vector.fromAngle(angle-HALF_PI);
        this.vel.mult(10);
        this.exploded = false;
    }

    show(){
        push();
            // translate(this.x, this.y);
            // fill(255);
            fill(245, 66, 209);
            // rotate(this.angle);
            ellipse(this.pos.x, this.pos.y, this.r*2);
            stroke(255);
            // line(this.x, this.y, this.pos.x, this.pos.y);
        pop();
    }

    fire(){
        // this.vel.mult(1.1);
        this.pos.add(this.vel);
    }

    hits(meteor){
        let d = dist(this.pos.x, this.pos.y, meteor.pos.x, meteor.pos.y);

        // if(d < (this.r + meteor.r)){
        //     // console.log('hits');
        //     return true;
        // }else{
        //     return false;
        // }

        if(d < (this.r + meteor.r)){
            // console.log('hits');
            return (d < this.r + meteor.r);
            }
    }

    explodes(){
        this.exploded = true;
    }
}