var randomNumber1=Math.floor(Math.random()*6)+1;
var imgSrc="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgSrc);


//for second pic
var randomNumber2=Math.floor(Math.random()*6)+1;
var src2="images/dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",src2);

//for name on top
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player one wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player Second wins ";
}
else{
    document.querySelector("h1").innerHTML="Draw ";
}

