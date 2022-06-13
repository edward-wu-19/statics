const arrowTexture = PIXI.utils.TextureCache["res/arrow.png"];

const forcesPerLevel = [ [ 1, 1, 1, 1, 1, 2, 2, 3, 3, 4], [0, 0, 1, 1, 2, 1, 2, 1, 2, 1]]

var currentForces = [];

function clearForces(){
    for (i in currentForces){
        currentForces[i].visible = false;
    }
}

function generateForce(mag, theta, xpos, ypos){
    // let force = {x_mag: xmag, y_mag: ymag, x_pos: xpos, y_pos: ypos};

    var force = new PIXI.Sprite(
        PIXI.Loader.shared.resources["res/arrow.png"].texture
    );

    force.visible = true;

    force.x = halfCanvasWidth + xpos * particle.width;
    force.y = halfCanvasHeight + ypos * particle.height;
    force.width = mag;
    force.height = forceHeight;
    force.rotation = theta;

    force.anchor.set(0.5);
    force.pivot.set(-275,0);
    // if (tint != null){
    //     DisplayedSprite.tint = tint;
    // }
    // DisplayedSprite.timeline = [];
    // DisplayedSprite.deletedTimeline = [];

    app.stage.addChild(force);
    currentForces.push(force);

    // console.log("hi");

    return force;
}

function numForces(level){
    return forcesPerLevel[0][level-1] + Math.floor((forcesPerLevel[1][level-1]+1) * Math.random());
}

function createForces(n){
    for(let i = 0; i < n; i++){
        let mag = Math.random() * 50 + 50;
        let theta = 2*Math.PI*Math.random();
        let phi = 2*Math.PI*Math.random();
        let xpos = 0.5 * Math.cos(phi);
        let ypos = 0.5 * Math.sin(phi);
        generateForce(mag, theta, xpos, ypos);
    }
    return currentForces;
}

function generatePlayerForce(){
    var playerForce = new PIXI.Sprite(
        PIXI.Loader.shared.resources["res/player_arrow.png"].texture
    );

    playerForce.visible = false; // turn this to false for final

    playerForce.height = forceHeight;
    playerForce.width = 0;

    playerForce.interactive = true;
    playerForce.anchor.set(0.5);
    playerForce.pivot.set(-275,0);

    app.stage.addChild(playerForce);

    return playerForce;
}

function show_force(force, particle) {
var headlen = 10; // length of head in pixels
let fromx = force.xpos;
let fromy = force.ypos;
let tox = force.xmag+force.xpos+particle.x;
let toy = force.ymag+force.ypos+particle.y;

var dx = tox - fromx;
var dy = toy - fromy;
var angle = Math.atan2(dy, dx);
app.moveTo(fromx, fromy);
app.lineTo(tox, toy);
app.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
app.moveTo(tox, toy);
app.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

function netForce(force_array){
let net_x = 0;
let net_y = 0;
for(let i = 0; i < force_array.length; i++){
    force_array[i].xmag += net_x;
    force_array[i].ymag += net_y;
}
return generateForce(net_x, net_y, 0, 0);
}

function displayNetForce(xmag, ymag){
    var netForce = new PIXI.Sprite(
        PIXI.Loader.shared.resources["res/net_arrow.png"].texture
    );

    let mag = distanceFrom(xmag, ymag, 0, 0);
    var theta;
    if (xmag > 0){
        theta = Math.atan(ymag / xmag);
    }
    else{
        theta = Math.PI + Math.atan( ymag / xmag);
    }

    netForce.visible = true;

    netForce.x = halfCanvasWidth;
    netForce.y = halfCanvasHeight;
    netForce.width = mag;
    netForce.height = forceHeight;
    netForce.rotation = theta;

    netForce.anchor.set(0.5);
    netForce.pivot.set(-275,0);
    // if (tint != null){
    //     DisplayedSprite.tint = tint;
    // }
    // DisplayedSprite.timeline = [];
    // DisplayedSprite.deletedTimeline = [];

    app.stage.addChild(netForce);
    currentForces.push(netForce);

    // console.log("hi");

    return netForce;
}