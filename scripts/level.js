const particleTexture = PIXI.utils.TextureCache["res/circle.png"];
const arrowTexture = PIXI.utils.TextureCache["res/arrow.png"];
// const sprite = new PIXI.Sprite(particleTexture);

function generateParticle(){

    // particle = new Sprite(particleTexture);

    // particle.x = 128;
    // particle.y = 128;

    const particle = new PIXI.Sprite(particleTexture);

    // app.stage.addChild(particle);

    // particle.visible = true;

    // particle.width = 20;
    // particle.height = 20;
}

generateParticle();

function generateForce(xmag, ymag, xpos, ypos){
  let force = {x_mag: xmag, y_mag: ymag, x_pos: xpos, y_pos: ypos};
  return force;
}

function createForces(n, radius){
  let force_array = {};
  for(let i = 0; i < n; i++){
    let theta = 2*Math.pi()*Math.random();
    let xpos = radius * Math.cos(theta);
    let ypos = radius * Math.sin(theta);
    xmag = Math.random()*10;
    ymag = Math.random()*10;
    if(ypos>0){
      ypos *= (-ypos);
    }
    if(xpos>0){
      xpos *= (-xpos);
    }
    force_array.push(generateForce(xmag, ymag, xpos, ypos));
  }
  return a;
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

}
