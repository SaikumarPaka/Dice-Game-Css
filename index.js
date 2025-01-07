// player 1
var randomNumber1 = Math.floor(Math.random()* 6)+1;

var randomImagesName = "dice"+randomNumber1+".png";

var randomImageSource = "images/" + randomImagesName;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImageSource);

// Place 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageName2 = "dice"+randomNumber2+".png";

var randomImageSource2 = "images/"+randomImageName2;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "🚩palyer 1 wins";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "palyer 2 wins🚩";

}else{
    document.querySelector("h1").innerHTML = "Draw!";

}