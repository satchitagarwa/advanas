x=0;
y=0;
d_c="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
        document.getElementById("status").innerHTML="the speech has been recogonized as:"+content;
         if(content=="apple"){
            x= Math.floor(Math.random()*900);
            y= Math.floor(Math.random()*600); 
            document.getElementById("status").innerHTML="System is drawing apple";
            d_c="set";
         }

}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(d_c=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML=" apple is drawn";
        d_c=""; 

    }
}
