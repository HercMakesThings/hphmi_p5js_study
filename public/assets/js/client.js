console.log('ready freddy...');

// let connector1;
// let pump1;
// let pump2;
// let valve1;
// let tank1;

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

const sketch = (p) => {
    let connector1;
    let pump1;
    let pump2;
    let valve1;
    let tank1;

    p.setup = function(){
        p.createCanvas(p.windowWidth, 500);

        init_point_6.x = p.width/2;
        init_point_6.y = p.height/2;

        pump1 = new Pump(init_point_1, 40);
        pump2 = new Pump(init_point_2, 40);
        tank1 = new HpHmiTank(init_point_6);
        valve1 = new HpHmiValve(init_point_5);
        connector1 = new Connector(
                    init_point_1.x, init_point_1.y, 
                    init_point_3.x, init_point_3.y, 
                    init_point_4.x, init_point_4.y, 
                    init_point_2.x, init_point_2.y, false
                );
        p.describe(
            'An interactible basic example of a High Performance HMI'
        );
    };

    p.draw = function(){
        p.background(231);

        connector1.render(p);
        pump1.render(p);
        pump2.render(p);
        tank1.render(p);
        valve1.render(p);
    };

    p.mousePressed = function(){}

    p.mouseReleased = function(){}

    p.mouseDragged = function(){
        pump1.move(p, p.mouseX, p.mouseY);
        pump2.move(p, p.mouseX, p.mouseY);
        valve1.move(p, p.mouseX, p.mouseY);
        tank1.move(p, p.mouseX, p.mouseY);

        if (p.dist(p.mouseX, p.mouseY, connector1.xControl2, connector1.yControl2) < 20) {
            connector1.move(p.mouseX, p.mouseY, 'control2');
        }
        if (p.dist(p.mouseX, p.mouseY, connector1.xControl1, connector1.yControl1) < 20) {
            connector1.move(p.mouseX, p.mouseY, 'control1');
        }
        if (p.dist(p.mouseX, p.mouseY, connector1.x1, connector1.y1) < 20) {
            connector1.move(p.mouseX, p.mouseY, 'p1');
        }
        if (p.dist(p.mouseX, p.mouseY, connector1.x2, connector1.y2) < 20) {
            connector1.move(p.mouseX, p.mouseY, 'p2');
        }
    }
};

let hphmi = new p5(sketch, 'canvasContainer');

//P5 SETUP FUNCTION
// function setup(){
//     let canvas = createCanvas(windowWidth, 500);
//     canvas.parent('canvasContainer');

//     init_point_6.x = width/2;
//     init_point_6.y = height/2;

//     connector1 = new Connector(
//         init_point_1.x, init_point_1.y, 
//         init_point_3.x, init_point_3.y, 
//         init_point_4.x, init_point_4.y, 
//         init_point_2.x, init_point_2.y, false
//     );
//     pump1 = new Pump(init_point_1, 40);
//     pump2 = new Pump(init_point_2, 40);
//     valve1 = new HpHmiValve(init_point_5);
//     tank1 = new HpHmiTank(init_point_6);

//     describe(
//         'An interactible basic example of a High Performance HMI'
//     );
// }

// //P5 DRAW LOOP
// function draw(){
//     background(231);

//     connector1.render();
//     pump1.render();
//     pump2.render();
//     valve1.render();
//     tank1.render();
// }

// // Start changing the first control point if the user clicks near it.
// function mousePressed() {
//     connector1.toggleChange(mouseX, mouseY);
// }
  
//   // Stop changing the first control point when the user releases the mouse.
// function mouseReleased() {
//     connector1.toggleChange();
//     console.log('mouseX: ' + mouseX);
//     console.log('mouseY: ' + mouseY);
// }
  
//   // Update the first control point while the user drags the mouse.
// function mouseDragged() {
//     valve1.move(mouseX, mouseY);
//     pump1.move(mouseX, mouseY);
//     pump2.move(mouseX, mouseY);
//     tank1.move(mouseX, mouseY);
//     if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.xControl2, connector1.yControl2) < 20) {
//         connector1.move(mouseX, mouseY, 'control2');
//     }
//     if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.xControl1, connector1.yControl1) < 20) {
//         connector1.move(mouseX, mouseY, 'control1');
//     }
//     if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.x1, connector1.y1) < 20) {
//         connector1.move(mouseX, mouseY, 'p1');
//     }
//     if (connector1.isChanging == true && dist(mouseX, mouseY, connector1.x2, connector1.y2) < 20) {
//         connector1.move(mouseX, mouseY, 'p2');
//     }
// }