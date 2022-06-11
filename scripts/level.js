const particleTexture = PIXI.utils.TextureCache["res/circle.png"];
const arrowTexture = PIXI.utils.TextureCache["res/arrow.png"];
// const sprite = new PIXI.Sprite(particleTexture);

function generateParticle(){

    // particle = new Sprite(particleTexture);

    // particle.x = 128;
    // particle.y = 128;

    var particle = new PIXI.Sprite(
      PIXI.Loader.shared.resources["res/circle.png"].texture
    );

    particle.visible = true;

    particle.x = 192;
    particle.y = 128;
    particle.width = 20;
    particle.height = 20;

    particle.level = roundNumber;

    particle.d = [0, 0, 0, 0, 0];
    particle.interactive = true;
    particle.anchor.set(0.5);
    // if (tint != null){
    //     DisplayedSprite.tint = tint;
    // }
    // DisplayedSprite.timeline = [];
    // DisplayedSprite.deletedTimeline = [];

    app.stage.addChild(particle);
    objects.push(particle);

    console.log("hi");

    return particle;
}

function generateForce(xmag, ymag, xpos, ypos){
  // let force = {x_mag: xmag, y_mag: ymag, x_pos: xpos, y_pos: ypos};

  var force = new PIXI.Sprite(
    PIXI.Loader.shared.resources["res/arrow.png"].texture
  );

  force.visible = true;

  force.x = 192 + xpos * particle.width;
  force.y = 128 + ypos * particle.height;
  force.width = xmag;
  force.height = ymag;

  force.level = roundNumber;

  force.d = [0, 0, 0, 0, 0];
  force.interactive = true;
  force.anchor.set(0.5);
  // if (tint != null){
  //     DisplayedSprite.tint = tint;
  // }
  // DisplayedSprite.timeline = [];
  // DisplayedSprite.deletedTimeline = [];

  app.stage.addChild(force);
  currentForces.push(force);

  console.log("hi");

  return force;
}

function createForces(n, radius){
  for(let i = 0; i < n; i++){
    let theta = 2*Math.PI*Math.random();
    let xpos = radius * Math.cos(theta);
    let ypos = radius * Math.sin(theta);
    xmag = Math.random()*10+20;
    ymag = Math.random()*10+20;
    xpos = Math.abs(xpos);
    ypos = Math.abs(ypos);
    currentForces.push(generateForce(xmag, ymag, xpos, ypos));
  }
  return currentForces;
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

// should this function take a parameter of how many forces to have, let it be random in an interval?
function generateLevel(){
  // create particle and forces
  particle = generateParticle();

  createForces(1, particle.width/2.0);
}
