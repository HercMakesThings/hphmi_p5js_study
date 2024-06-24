console.log('ready freddy...');

// let meteors = new Array();
// let meteors = [];
// let pellets = [];
// let blaster;
// let canvasCol;
let connector1;
let pump1;
let pump2;
let valve1;
let tank1;

let init_point_1 = {
    x: 360,
    y: 120,
    data: {
        point_status: {
            value: 'ON'
        }
    }
};
let init_point_2 = {
    x: 720,
    y: 450,
    data: {
        point_status: {
            value: 'OFF'
        }
    }
};
let init_point_3 = {
    x: 100,
    y: 40,
    data: {}
};
let init_point_4 = {
    x: 740,
    y: 40,
    data: {}
};
let init_point_5 = {
    x: 100,
    y: 400,
    data: {}
};
let init_point_6 = {
    x: 0,
    y: 0,
    data: {}
};

// Click the mouse near the red dot in the top-left corner
// and drag to change the curve's shape.
// let xControl1 = 740;
// let yControl1 = 320;
// let xControl2 = 100;
// let yControl2 = 40;
let xControl1 = 100;
let yControl1 = 40;
let xControl2 = 740;
let yControl2 = 40;
let x1 = 360;
let y1 = 120;
let x2 = 720;
let y2 = 450;
let isChanging = false;

let point1 = {
    xControl1: 100,
    yControl1: 40,
    xControl2: 740,
    yControl2: 40,
    x1: 360,
    y1: 120,
    x2: 720,
    y2: 450,
    isChanging: false,
    data: null
}

//P5 SETUP FUNCTION
function setup(){
    let canvas = createCanvas(windowWidth, 500);
    // let canvas = createCanvas(100, 100);
    // initBezier(canvas);
    canvas.parent('canvasContainer');
    // initBezier(canvas);
    // p5Bezier.initBezier(canvas);
    // background(0);
    // angleMode(DEGREES);
    // angleMode(RADIANS);
    // canvasCol = windowWidth / 9;

    // for(i=0; i<8; i++){
    //         meteors.push(new Meteor((canvasCol * i) + canvasCol, 100, 50));
    //     }
    // for(let i = 0; i < 10; i++){
    //     meteors.push(new Meteor(Math.floor(Math.random() * width), Math.floor(Math.random() * (height - 200)), Math.floor(Math.random() * (40 - 30) + 30), 0.65));
    // }

    //blaster obj init
    // blaster = new Blaster();

    // connector1 = new Connector(x1, y1, xControl1, yControl2, xControl2, yControl2, x2, y2);
    // connector1 = new Connector(point1.x1, point1.y1, point1.xControl1, point1.yControl2, point1.xControl2, point1.yControl2, point1.x2, point1.y2, point1.isChanging);

    // connector1 = new Connector(point1);
    // pump1 = new Pump(point1.x1, point1.y1, 40);
    // pump2 = new Pump(point1.x2, point1.y2, 40);
    // valve1 = new HpHmiValve(width/3, 400);

    init_point_6.x = width/2;
    init_point_6.y = height/2;

    connector1 = new Connector(
        init_point_1.x, init_point_1.y, 
        init_point_3.x, init_point_3.y, 
        init_point_4.x, init_point_4.y, 
        init_point_2.x, init_point_2.y, false
    );
    pump1 = new Pump(init_point_1, 40);
    pump2 = new Pump(init_point_2, 40);
    valve1 = new HpHmiValve(init_point_5);
    tank1 = new HpHmiTank(init_point_6);

    describe(
        'A gray square with three curves. A black s-curve has two straight, red lines that extend from its ends. The endpoints of all the curves are marked with dots.'
    );
}

//P5 DRAW LOOP
function draw(){
    background(231);
    // background(200);

    connector1.render();
    // connector1.update(x1, y1, xControl1, yControl1, xControl2, yControl2, x2, y2);
    pump1.render();
    pump2.render();
    valve1.render();
    tank1.render();
    // connector1.render();
    // push();
    // fill(0);
    // circle(x, y, d)
    // pop();
    // connector1.update(point1.x1, point1.y1, point1.xControl1, point1.yControl1, point1.xControl2, point1.yControl2, point1.x2, point1.y2);

    // // Draw the anchor points in black.
    // stroke(93);
    // strokeWeight(5);
    // point(x1, y1);
    // point(x2, y2);
    // //   point(360, 120);
    // //   point(720, 450);

    // // Draw the control points in red.
    // stroke(255, 0, 0);
    // point(xControl2, yControl2);
    // point(xControl1, yControl1);

    // // Draw a black bezier curve.
    // noFill();
    // stroke(93);
    // strokeWeight(1);
    // bezier(x1, y1, xControl1, yControl1, xControl2, yControl2, x2, y2);

    // // Draw red lines from the anchor points to the control points.
    // stroke(255, 0, 0);
    // line(x2, y2, xControl2, yControl2);
    // line(x1, y1, xControl1, yControl1);

    //looping back through array every draw loop for showing meteors & meteor activity
    // for(i=meteors.length-1; i>=0; i--){
    //     // meteors[i].fall();
    //     meteors[i].float();
    //     meteors[i].update();
    //     meteors[i].boundaries();
    //     if(meteors[i].exploded){
    //         meteors.splice(i, 1);
    //     }
    // }

    // //loops through pellets array every draw loop for pellet activity
    // for(let p = pellets.length-1; p >= 0; p--){ 
    //     pellets[p].show();
    //     pellets[p].fire();
    //     //check every pellet in array against every meteor
    //     for(let i = meteors.length-1; i >= 0; i--){
    //         if(pellets[p].hits(meteors[i])){
    //             // console.log('HITS');
    //             meteors[i].explodes();
    //             pellets[p].explodes();

    //             let meteorPieces = meteors[i].breakup();
    //             meteors = meteors.concat(meteorPieces);
    //             // meteors.splice(i, 1);

    //         }

    //         if(pellets[p].pos.y < -50 || pellets[p].pos.y > 1000){
    //             pellets[p].explodes();
    //         }
    //     }
    //     //if pellet.isExploded is true, splice that pellet out of array
    //     if(pellets[p].exploded){
    //         pellets.splice(p, 1);
    //     }
    // }

    // //blaster behavior controllers
    // blaster.show();
    // blaster.aim();
    // blaster.update();
    // blaster.boundaries();

    // //checks every meteor in array against blaster object
    // //If blaster object comes into contact with any meteor, blaster position will reset to starting position and meteors will be replaced with a new fresh array
    // for(let i=meteors.length-1; i>=0; i--){
    //     if(blaster.hits(meteors[i])){
    //         blaster.pos.x = width/2;
    //         blaster.pos.y = height;
    //         // for(let j=meteors.length; j>=0; j--){
    //         //     let newMeteor = new Meteor(Math.floor(Math.random() * width), Math.floor(Math.random() * (height - 200)), Math.floor(Math.random() * (40 - 20) + 20));
    //         //     meteors.splice(j, 1, newMeteor);
    //         // }
    //         meteors.length = 0;
    //         for(let i = 0; i < 10; i++){
    //             meteors.push(new Meteor(Math.floor(Math.random() * width), Math.floor(Math.random() * (height - 200)), Math.floor(Math.random() * (40 - 30) + 30), 0.65));
    //         }
    //         break;
    //     }
    // }
}

// function keyReleased(){
//     blaster.setRotation(0);
//     if(key === 'w'){
//         blaster.boosting(false);
//     }
// }

// function keyPressed(){
//     // angleMode(DEGREES);

//     if(key === ' '){
//         let pellet = new Pellet(blaster.pos.x, blaster.pos.y, blaster.heading);
//         // pellet.ang = blaster.rot;
//         pellets.push(pellet);
//     }else if(key === 'd'){
//             blaster.setRotation(0.05);
//     }else if(key === 'a'){
//             blaster.setRotation(-0.05);
//     }else if(key === 'w'){
//         // blaster.boost();
//         blaster.boosting(true);
//     }
// }

// Start changing the first control point if the user clicks near it.
function mousePressed() {
    // pump1.toggleChange(mouseX, mouseY);
    // pump2.toggleChange(mouseX, mouseY);
    connector1.toggleChange(mouseX, mouseY);
    // if (dist(mouseX, mouseY, connector1.x1, connector1.y1) < 20) {
    //     //   point1.isChanging = true;
    //     connector1.toggleChange(mouseX, mouseY);
    //     pump1.toggleChange(mouseX, mouseY);
    //     // connector1.isChanging = true;
    //     return;
    // }
    // if (dist(mouseX, mouseY, connector1.x2, connector1.y2) < 20) {
    //     //   point1.isChanging = true;
    //     connector1.toggleChange(mouseX, mouseY);
    //     pump2.toggleChange(mouseX, mouseY);
    //     // connector1.isChanging = true;
    //     return;
    // }
    // if (dist(mouseX, mouseY, connector1.xControl2, connector1.yControl2) < 20) {
    //     // point1.isChanging = true;
    //     connector1.toggleChange(mouseX, mouseY);
    //     // connector1.isChanging = true;
    //     return;
    // }
    // if (dist(mouseX, mouseY, connector1.xControl1, connector1.yControl1) < 20) {
    //     //   point1.isChanging = true;
    //     connector1.toggleChange(mouseX, mouseY);
    //     // connector1.isChanging = true;
    //     return;
    // }

    // if (dist(mouseX, mouseY, point1.xControl2, point1.yControl2) < 20) {
    //     point1.isChanging = true;
    //   }
    //   if (dist(mouseX, mouseY, point1.xControl1, point1.yControl1) < 20) {
    //       point1.isChanging = true;
    //   }
    //   if (dist(mouseX, mouseY, point1.x1, point1.y1) < 20) {
    //       point1.isChanging = true;
    //   }
    //   if (dist(mouseX, mouseY, point1.x2, point1.y2) < 20) {
    //       point1.isChanging = true;
    //   }

    // if (dist(mouseX, mouseY, xControl2, yControl2) < 20) {
    //   isChanging = true;
    // }
    // if (dist(mouseX, mouseY, xControl1, yControl1) < 20) {
    //     isChanging = true;
    // }
    // if (dist(mouseX, mouseY, x1, y1) < 20) {
    //     isChanging = true;
    // }
    // if (dist(mouseX, mouseY, x2, y2) < 20) {
    //     isChanging = true;
    // }
}
  
  // Stop changing the first control point when the user releases the mouse.
  function mouseReleased() {
    // point1.isChanging = false;
    connector1.toggleChange();
    console.log('mouseX: ' + mouseX);
    console.log('mouseY: ' + mouseY);
    // pump1.toggleChange();
    // pump2.toggleChange();

    // console.log('x1: ' + connector1.x1);
    // console.log('y1: ' + connector1.y1);
    // console.log('x2: ' + connector1.x2);
    // console.log('y2: ' + connector1.y2);
    // console.log('xControl1: ' + connector1.xControl1);
    // console.log('yControl1: ' + connector1.yControl1);
    // console.log('xControl2: ' + connector1.xControl2);
    // console.log('yControl2: ' + connector1.yControl2);

    // connector1.toggleChange();
    // console.log('x1: ' + point1.x1);
    // console.log('y1: ' + point1.y1);
    // console.log('x2: ' + point1.x2);
    // console.log('y2: ' + point1.y2);
    // console.log('xControl1: ' + point1.xControl1);
    // console.log('yControl1: ' + point1.yControl1);
    // console.log('xControl2: ' + point1.xControl2);
    // console.log('yControl2: ' + point1.yControl2);

    // isChanging = false;
    // console.log('x1: ' + x1);
    // console.log('y1: ' + y1);
    // console.log('x2: ' + x2);
    // console.log('y2: ' + y2);
    // console.log('xControl1: ' + xControl1);
    // console.log('yControl1: ' + yControl1);
    // console.log('xControl2: ' + xControl2);
    // console.log('yControl2: ' + yControl2);
  }

//   function dragPoint(point, mouseX, mouseY, pointType) {
//     switch (pointType) {
//         case 'p1':
//             point.x1 = mouseX;
//             point.y1 = mouseY;
//             // return point;
//             break;
//         case 'control1':
//             point.xControl1 = mouseX;
//             point.yControl1 = mouseY;
//             // return point;
//             break;
//         case 'control2':
//             point.xControl2 = mouseX;
//             point.yControl2 = mouseY;
//             // return point;
//             break;
//         case 'p2':
//             point.x2 = mouseX;
//             point.y2 = mouseY;
//             // return point;
//             break;
//     }
//     return point;
//   }
  
  // Update the first control point while the user drags the mouse.
  function mouseDragged() {
    valve1.move(mouseX, mouseY);
    pump1.move(mouseX, mouseY);
    pump2.move(mouseX, mouseY);
    tank1.move(mouseX, mouseY);
    if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.xControl2, connector1.yControl2) < 20) {
        connector1.move(mouseX, mouseY, 'control2');
    }
    if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.xControl1, connector1.yControl1) < 20) {
        connector1.move(mouseX, mouseY, 'control1');
    }
    if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.x1, connector1.y1) < 20) {
        connector1.move(mouseX, mouseY, 'p1');
    }
    if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.x2, connector1.y2) < 20) {
        connector1.move(mouseX, mouseY, 'p2');
    }
  }