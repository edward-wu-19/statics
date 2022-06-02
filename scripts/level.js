const particleTexture = PIXI.utils.TextureCache["res/circle.png"];
// const sprite = new PIXI.Sprite(particleTexture);

function generateParticle(){

    // particle = new Sprite(particleTexture);

    // particle.x = 128;
    // particle.y = 128;

    const particle = new PIXI.Sprite(PIXI.Loader.shared.resources["res/circle.png"].texture);

    app.stage.addChild(particle);

    particle.visible = true;

    particle.width = 20;
    particle.height = 20;
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
    force_array.push(generateForce(xmag, ymag, xpos, ypos);
  }
  return a;
}

function netForce(force_array){

}

// should this function take a parameter of how many forces to have, let it be random in an interval?
function generateLevel(){

}
