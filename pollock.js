let myCanvas = document.getElementById("myCanvas");

paper.setup(myCanvas);

function drawCiricle(e){
    console.log(e)
    if (isMouseDown){
        let circle = new paper.Path.Circle({
            radius: Math.random() * 30,
            center: {
                x : e.x,
                y : e.y

            }
        })
        let red = Math.random() * 255
        let green = Math.random() * 255
        let blue = Math.random() * 255

        circle.fillColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
}
}
myCanvas.addEventListener("mousemove", drawCiricle)

let isMouseDown = false


function mouseDown(){
    isMouseDown = true
}
function mouseUp(){
    isMouseDown = false
}



myCanvas.addEventListener("mousedown", mouseDown)
myCanvas.addEventListener("mouseup", mouseUp)

