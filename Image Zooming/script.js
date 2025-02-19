let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth+"px";

function onIncreament(){
    
    if (defaultImageWidth<300){
        defaultImageWidth +=5;
    document.getElementById("imageWidth").textContent =defaultImageWidth+"px";
        imageElement.style.width =defaultImageWidth+"px";
        document.getElementById("warningMessage").textContent ="";
    }else{
        document.getElementById("warningMessage").textContent ="Too Big";
    }
    
}

function onDecrement(){
    
    if (defaultImageWidth>100){
        defaultImageWidth -=5;
    document.getElementById("imageWidth").textContent =defaultImageWidth+"px";
        imageElement.style.width =defaultImageWidth+"px";
        document.getElementById("warningMessage").textContent ="";
    }else{
        document.getElementById("warningMessage").textContent ="Too Small";
    }
    
}
