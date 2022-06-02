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

function generateForce(){
}

function createForces(n){

}

// should this function take a parameter of how many forces to have, let it be random in an interval?
function generateLevel(){

}