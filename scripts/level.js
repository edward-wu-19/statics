const particleTexture = PIXI.utils.TextureCache["res/circle.png"];
// const sprite = new PIXI.Sprite(particleTexture);

function generateParticle(){

    var particle = new PIXI.Sprite(
      PIXI.Loader.shared.resources["res/circle.png"].texture
    );

    particle.visible = true;

    particle.x = halfCanvasWidth;
    particle.y = halfCanvasHeight;
    particle.width = particleDim;
    particle.height = particleDim;

    // d is the delta x and delta y variables
    particle.d = [0, 0];
    particle.interactive = true;
    particle.anchor.set(0.5);

    particle
    .on('pointerdown', onDragStartForce)
    .on('pointerup', onDragEndForce)
    .on('pointerupoutside', onDragEndForce)
    .on('pointermove', onDragMoveForce);
    // if (tint != null){
    //     DisplayedSprite.tint = tint;
    // }
    // DisplayedSprite.timeline = [];
    // DisplayedSprite.deletedTimeline = [];

    app.stage.addChild(particle);
    particlesArray.push(particle);

    // console.log("hi");

    return particle;
}

function generateGhostParticle(){
  var ghostParticle = new PIXI.Sprite(
    PIXI.Loader.shared.resources["res/circle.png"].texture
  );

  ghostParticle.visible = true;

  ghostParticle.x = halfCanvasWidth;
  ghostParticle.y = halfCanvasHeight;
  ghostParticle.width = particleDim;
  ghostParticle.height = particleDim;

  ghostParticle.anchor.set(0.5);

  app.stage.addChild(ghostParticle);

  return ghostParticle;
}

// should this function take a parameter of how many forces to have, let it be random in an interval?
function generateLevel(){
  // clear last level
  clearForces();

  // hide old player force
  playerForce.visible = false;

  // reset currentForces
  currentForces = [];

  // create particle and forces
  particle = generateParticle();

  createForces(numForces(roundNumber));

  // generate new player force
  playerForce = generatePlayerForce();

  // setting up an invisible background to make the canvas clickable
  // background has to be on top
  
  // const bg = PIXI.Texture.from("res/background.jpg");
  // background = new PIXI.Sprite(PIXI.loader.resources["res/background.jpg"].texture);
  // background.width = app.screen.width;
  // background.height = app.screen.height;
  // background.alpha = 0;
  // background.interactive = true;
  // background
  //   .on('pointerdown', onDragStartForce)
  //   .on('pointerup', onDragEndForce)
  //   .on('pointerupoutside', onDragEndForce)
  //   .on('pointermove', onDragMoveForce);
  // app.stage.addChild(background);
}
