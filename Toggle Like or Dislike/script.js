let puppyImg = document.getElementById("puppyImage");
let likeButton = document.getElementById("likeButton");
let likeIcon = document.getElementById("likeIcon");
let likeSwitch = true;

function onClickLikeButton() {
    if (likeSwitch){
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#cbd2d9";
        likeIcon.style.color = "#0967d2";
        likeSwitch= false;
    }else{
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
        likeIcon.style.color = "#cbd2d9";
        likeSwitch= true;
    }
    

}