dog = 0;
cat = 0;
lion = 0;
cow = 0;
//https://teachablemachine.withgoogle.com/models/pV1CDmURM/


function startclassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pV1CDmURM/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;

        random_number_g = Math.floor(Math.random() * 255) + 1;

        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("hear").innerHTML = 'I can hear - '+
        results[0].label;


        document.getElementById("hear").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";


        img1 = document.getElementById("i1");
        

        if (results[0].label == "mooing"){
            img1.src = "download1.jpg";
            cow++;
            document.getElementById("nahb").innerHTML = "Detected cow🐮 - " + cow;
        } 
        else if (results[0].label == "meowing"){
            img1.src = "download.jpg";
            cat++;
            document.getElementById("naha").innerHTML = "Detected cat😺 - " + cat;
        }
        else if (results[0].label == "barking"){
            img1.src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
            
             dog++;
            
            document.getElementById("nahj").innerHTML = "Detected dog🐶 - " + dog;
        }
        else if (results[0].label == "roaring"){
            img1.src = "lion-male-roar_square.jpg";
            lion++;
            document.getElementById("nahc").innerHTML = "Detected lion🦁 - " + lion;
        }
        else{
            img1.src = "yoyGG.png";
        }
        
        
        
    }
}

