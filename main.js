Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:100,

    constraints:{
        facingMode:"environment"
    }
});

webcam = document.getElementById("Cam");

Webcam.attach(webcam);

function Snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("Snap").innerHTML = '<img id="Cap_Img" src="'+data_uri+'"/>';
    });
}
console.log("ML5 version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", loaded);

function loaded(){
    console.log("Model Loaded Very very very very very very very very Successfffffffuuuuuuuuulllllllllyyyyyyyyy!!!!!!!");
}

function Check() {
    img = document.getElementById("Cap_Img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Result_h3").innerHTML=results[0].label +","+results[1].label + ","+results[2].label;
    }
}