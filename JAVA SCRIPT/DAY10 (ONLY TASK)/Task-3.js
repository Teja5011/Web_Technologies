//how to call a function  
var aud1=new Audio();
var aud2=new Audio();
var aud3=new Audio();
var aud4=new Audio();

aud1.src="../../ASSERTS/AUDIOS/fizzbuzz 1.wav";
aud2.src="../../ASSERTS/AUDIOS/fizz 1.wav";
aud3.src="../../ASSERTS/AUDIOS/buzz 1.wav";
aud4.src="../../ASSERTS/AUDIOS/nothing 1.wav";

var num=0;
var h1Tag=document.getElementById("status");
var imgTag=document.getElementById("image")
function fun(){
    num++;
    if (num%3==0 && num%5==0)
    {
        h1Tag.innerHTML="fizzbuzz";
        imgTag.src="../../ASSERTS/IMAGES/audi car.jpeg";
        aud1.play();
    }
    else if(num%3==0)
    {
        h1Tag.innerHTML="fizz";
        imgTag.src="../../ASSERTS/IMAGES/fizz.jpeg";
        aud2.play();
    }
    else if (num%5==0)
    {
        h1Tag.innerHTML="buzz";
        imgTag.src="../../ASSERTS/IMAGES/buzz.jpeg";       
        aud3.play();
    }
    else{

        h1Tag.innerHTML=num;
        imgTag.src="../../ASSERTS/IMAGES/rocket3.png";
        aud4.play();           
    }
    setTimeout(fun,1000);
}
fun()