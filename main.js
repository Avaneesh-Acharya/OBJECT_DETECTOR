flag=""
objects=[]
function preload() {
    img=loadImage("https://i.postimg.cc/wjyZcbpH/a.png")
}
function setup() {
    canvas=createCanvas(620.893, 800)
    canvas.center()
    objd=ml5.objectDetector("cocossd", model_loaded)
}
function model_loaded() {
    console.log("Model is loaded")
    flag=true
    objd.detect(img, got_results)
}
function got_results(error, results) {
    if (error) {
        console.error(error)
    }
    else{
        console.log(results)
        objects=results
    }
}
function draw() {
    image(img, 0,0, 620.893, 800)
    if (flag!="") {
       for (let index = 0; index < objects.length; index++) {
        console.log(objects[index].label)
        console.log(objects[index].width)
        console.log(objects[index].height)
        console.log(objects[index].x)
        console.log(objects[index].y)
        
        fill("#4169e1")
        percent=floor([objects[index].confidence*100])
        text(objects[index].label+" "+percent+"%", objects[index].x-40, objects[index].y+160)
        noFill()
        stroke("#4169e1")
        rect(objects[index].x-40, objects[index].y+160, objects[index].width , objects[index].height)
       } 
    }
}
