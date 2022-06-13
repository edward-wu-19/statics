function move() {
    ghostParticle.alpha = 0.5;
    animation = setInterval(function () {
        particle.x += particle.d[0];
        particle.y += particle.d[1];
        if (!particleInBounds){
            clearInterval(animation);
        };
    }, 1000 / 60);
}


function particleInBounds(){
    if (particle.x < 0 - 2 * particleDim) return false;
    if (particle.x > 2 * (particleDim + halfCanvasWidth)) return false;
    if (particle.y < 0 - 2 * particleDim) return false;
    if (particle.y > 2 * (particleDim + halfCanvasHeight)) return false;
    return true;
}