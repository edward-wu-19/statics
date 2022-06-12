let mouseX = 0;
let mouseY = 0;
// mouseX=mouseY=0 at the top left of the canvas

function onDragStartForce(event) {
    if (timer_running){
        // this.data = event.data;
        this.dragging = true;

        playerForce.visible = true;

        let pos = event.data.global;
        // console.log(event.data);

        mouseX = pos.x;
        mouseY = pos.y;

        playerForce.position.set(mouseX, mouseY);
        // playerForce.anchor.set(0,0.5);
        playerForce.height = forceHeight;
        playerForce.width = 100;

        console.log(mouseX + " " + mouseY);
    }    
}

function onDragEndForce() {
    this.dragging = false;
}


function onDragMoveForce(event) {
    if (this.dragging && timer_running) {

        let pos = event.data.global;

        mouseX = pos.x;
        mouseY = pos.y;

        // const newPosition2 = this.data.getLocalPosition(this.parent);
        // this.x = newPosition2.x;
        // this.y = newPosition2.y;
        
        // playerForce.position.set(mouseX, mouseY);
        console.log(mouseX);
        playerForce.width = distanceFrom(mouseX, mouseY, playerForce.x, playerForce.y);
        playerForce.height = forceHeight;

        if (mouseX > playerForce.x){
            playerForce.rotation = Math.atan( (mouseY - playerForce.y ) / (mouseX - playerForce.x))
        }
        else if (mouseX < playerForce.x){
            playerForce.rotation = Math.PI + Math.atan( (mouseY - playerForce.y ) / (mouseX - playerForce.x))
        }
        
        // if (mouseX < 0){
        //     //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
        //     this.x = 0;  
        // }
        // if (mouseX > app.screen.width){
        //     //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
        //     this.x = app.screen.width; 
        // }
        // if (mouseY > app.screen.height){
        //     this.y = app.screen.height;
        // }
        // if (mouseY < 0){
        //     this.y = 0;
        // }
    }
}

function distanceFrom(x1, y1, x2, y2){
    return Math.sqrt( Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) );
}