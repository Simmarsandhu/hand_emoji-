//https://teachablemachine.withgoogle.com/models/EI26yH9lr/

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
        document.getElementById("results").innerHTML='<img id="capture_img src"'+data_uri+'">';
    });
    
}
console.log("modelversion",ml5.version);
classfier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EI26yH9lr/model.json", modelLoaded)

function modelLoaded(){
    console.log("modelLoaded");

}