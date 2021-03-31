var canvas = document.getElementById("myCanvas")    
var ctx = canvas.getContext("2d")
//Code for drawing the circle
ctx.beginPath()
//Begins a path, or resets the current path for drawing anything. It tells the canvas to start drawing the shape/object.
ctx.strokeStyle="grey"
ctx.lineWidth=4
ctx.rect(150,143,430,200)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(250,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(300,250,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(350,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(400,250,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(450,210,40,0,2*Math.PI)
ctx.stroke()

