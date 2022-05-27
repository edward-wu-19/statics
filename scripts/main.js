let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: document.getElementById("canvas").offsetWidth,
    height: document.getElementById("canvas").offsetHeight,
    antialias: true, 
    transparent: false, 
    resolution: 1,
    backgroundColor: 0x00FF00
  } 
);

document.getElementById("canvas").appendChild(app.view);

// loader
//   .add("res/img/circle.png")
//   .add("res/img/background.jpg")
//   .add("res/img/square.jpg")
//   .add("res/img/spritesheet-human.png")
//   .add("res/img/triangle.png")
//   .load(setup)
let background;
function setup() {
  const bg = PIXI.Texture.from("res/img/background.jpg");
  background = new PIXI.Sprite(PIXI.loader.resources["res/img/spritesheet-human.png"].texture);
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.alpha = 0;
  background.interactive = true;
  background.on('click', disableButtons);
  app.stage.addChild(background);
}

// let mouseX = 0;
// let mouseY = 0;
// let visualMouseY = 0; // mouseX=mouseY=0 at the top left of the canvas
// const itr = app.renderer.plugins.interaction;
//   itr.on('mousemove', ()=>{
//      mouseX = itr.mouse.global.x;
//      mouseY = itr.mouse.global.y;
//      visualMouseY = app.screen.height - mouseY;
//   })