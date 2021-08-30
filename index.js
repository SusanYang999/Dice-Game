var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var random1ImageSource="images/dice"+randomNumber1+".png";
var random2ImageSource="images/dice"+randomNumber2+".png";
document.querySelector("img.img1").setAttribute("src",random1ImageSource);

document.querySelector("img.img2").setAttribute("src",random2ImageSource);


if (randomNumber1===randomNumber2){
   document.querySelector("h1").innerHTML="🎉Draw!";

} else if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!🏅";

} else {

   document.querySelector("h1").innerHTML="Player 2 Wins!🏅";

}
