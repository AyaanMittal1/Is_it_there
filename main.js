status1=false;
video="";
objects=[];
cofedence=0;
function preload(){
    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center();
}
function draw(){
    image(video, 0,0,500,400);
    if(status1 == true){
        cocoSSD.detect(video,got_results);
        stroke(random(1,255),random(1,255),random(1,255));
        for(i=0; i<objects.length; i++){
            if(objects[i].label == document.getElementById("thing").value){
                document.getElementById("answer").innerHTML=objects[i].label+" is detected.";
            }
        }
    }
}
function got_results(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    document.getElementById("status").innerHTML="Status: Loaded";
}
function start(){
    cocoSSD=ml5.objectDetector("cocossd",model_ready);
    document.getElementById("status").innerHTML="Status: Loading";
}
function model_ready(){
    console.log("model has loaded");
    status1=true;
}
