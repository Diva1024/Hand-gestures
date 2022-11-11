Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
        });
    }
    console.log("ml5version: ",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/seEqSttE9/model.json", modelLoaded);
    function modelLoaded(){
        console.log("modelLoaded");
    }
    function speak(){
        var synth=window.SpeechSynthesis;
        speakdata1="The first prediction is "+prediction_1;
        var utterThis=new SpeechSynthesisUtterance(speakdata1);
        synth.speak(utterThis);
    }
    function check(){
        img=document.getElementById("captured_img");
        classifier.classify(img,gotResult);
    
    }
    function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    prediction_1=results[0].label;
    speak();
    if(prediction_1=="Nice Emoji"){
        document.getElementById("update_emoji").innerHTML="&#128076;";
    }
    if(prediction_1=="Thumbs up"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    if(prediction_1=="Clap"){
        document.getElementById("update_emoji").innerHTML="&#128079;";
    }
    if(prediction_1=="Punch"){
        document.getElementById("update_emoji").innerHTML="&#128074;";
    }
    if(prediction_1=="V emoji"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    }
    }