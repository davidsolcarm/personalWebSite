document.addEventListener("mousemove", mouselistener);

function mouselistener(event) {

    var ycord = event.clientY;
    var ymod = ycord / 19;

    document.body.style.backgroundColor =  "rgb("+ (255 - ymod) + "," + (255 - ymod) + "," + (255 - ymod) +")"
    
    event.clientX
}