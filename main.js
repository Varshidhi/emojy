prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    img_format: 'png' ,
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<im id="captured_img" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:', ml5.version);

    function modelLouded(){
        console.log('model loaded!');
    }
    function check() {
        img=document.getElementById('capture_image');
        classifier.classify(img, gotResult);
    }

    function speak(){
        var synth=window.speechSynthesis;
        spaeak_data_1="the first prediction is"+ prediction_1;
        spaeak_data_2="the second prediction is"+ prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }

    function gotResult(error,result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("result_enotion_name").innerHTML=result[0].label;
        document.getElementById("result_enotion_name2").innerHTML=result[1].label;
        prediction_1=result[0].label;
        prediction_2=result[1].label;
        speak();
        if(result[0].label == "happy")
        {
            document.getElementById("update_emojy").innerHTML= "&#128522;";
        }
         if(result[0].label == "sad")
        {
            document.getElementById("update_emojy").innerHTML= "&#128532;";
        }
         if(result[0].label == "angry")
        {
            document.getElementById("update_emojy").innerHTML= "&#128548;";
        }
         if(result[1].label == "happy")
        {
            document.getElementById("update_emojy2").innerHTML= "&#128522;";
        }
         if(result[1].label == "sad")
        {
            document.getElementById("update_emojy2").innerHTML= "&#128532;";
        }
         if(result[1].label == "angry")
        {
            document.getElementById("update_emojy2").innerHTML= "&#128548;";
        }
    }
    }

    