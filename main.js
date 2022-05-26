//https://teachablemachine.withgoogle.com/models/EI26yH9lr/

prediction1="";
prediction2="";

Webcam.set({
 width : 300,
 Height : 300,
 image_format: ".png",
 png_quality: 90
});

webcam = document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="capture_img" src ="'+data_uri+'">';
    });
    
}
console.log("modelversion",ml5.version);
classfier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EI26yH9lr/model.json", modelLoaded)

function modelLoaded(){
    console.log("modelLoaded");

}
 function check(){
     img= document.getElementById("capture_img");
     classfier.classify(img,gotresults);
 }
 function speak(){
    speech = window.speechSynthesis;
    speak_data1 = "the first prediction is "+ prediction1;
    speak_data2 = "the second prediction is "+ prediction2; 
    var utter = new SpeechSynthesisUtterance(speak_data1+speak_data2)
    speech.speak(utter);
}
 function gotresults(error,results){
     if(error){
         console.error(error)
     }
     else{
         console.log(results);
         document.getElementById("result_emotion_name").innerHTML=results[0].label;
         document.getElementById("result_emotion_name2").innerHTML=results[1].label;
         
         prediction1=results[0].label;
         prediction2=results[1].label;
         speak()

         if(results[0].label == "ok" ){
             document.getElementById("update_emoji").innerHTML= "&#128076;";
             
             
         }
         if(results[0].label == "thumbs up" ){
            document.getElementById("update_emoji").innerHTML= "&#128077;";
            
        }if(results[0].label == "peace sign" ){
            document.getElementById("update_emoji").innerHTML= "&#9996;";
            
        }
        if(results[1].label == "ok" ){
            document.getElementById("update_emoji2").innerHTML= "&#128076;";
            
        }
        if(results[1].label == "thumbs up" ){
           document.getElementById("update_emoji2").innerHTML= "&#128077;";
           
       }if(results[1].label == "peace sign" ){
           document.getElementById("update_emoji2").innerHTML = "&#9996;";
           
       }
     }

 }
 function speak(){
    speech = window.speechSynthesis;
    speak_data1 = "the first prediction is "+ prediction1;
    speak_data2 = "the second prediction is "+ prediction2; 
    var utter = new SpeechSynthesisUtterance(speak_data1+speak_data2)
    speech.speak(utter);
}