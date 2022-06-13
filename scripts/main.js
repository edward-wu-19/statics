let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: 384, // document.getElementById("canvas").offsetWidth, // 
    height: 300,
    antialias: true, 
    transparent: false, 
    resolution: 1,
    backgroundColor: 0x87CEEB
  } 
);

document.getElementById("canvas").appendChild(app.view);

PIXI.Loader.shared // .shared
  .add("res/circle.png")
  .add("res/arrow.png")
  .add("res/player_arrow.png")
  .add("res/net_arrow.png")
  .add("res/background.jpg")
  .load(setup);

let playerForce;

let particleDim = 100;
let forceHeight = 20;
let halfCanvasHeight = 150;
let halfCanvasWidth = 192;

function setup(){
  playerForce = generatePlayerForce();

  ghostParticle = generateGhostParticle();
  ghostParticle.alpha = 0;
}
// let background;
// function setup() {
  // const bg = PIXI.Texture.from("res/img/background.jpg");
  // background = new PIXI.Sprite(PIXI.loader.resources["res/img/spritesheet-human.png"].texture);
  // background.width = app.screen.width;
  // background.height = app.screen.height;
  // background.alpha = 0;
  // background.interactive = true;
  // background.on('click', disableButtons);
  // app.stage.addChild(background);
// }