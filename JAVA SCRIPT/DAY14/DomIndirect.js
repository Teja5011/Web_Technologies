// document.getElementById("heading").innerHTML="THIS IS A HEADING TAG";

// document.getElementById("heading").style.color="gold";
// document.getElementById("heading").style.backgroundColor="grey";
// document.getElementById("heading").style.fontSize="40px";
// document.getElementById("heading").style.width="30%";
// document.getElementById("heading").style.fontFamily="cursive";

//-------------------------------------------------------------------------------------------------------------------------------------

// var allheading1=document.getElementsByClassName("heading1");
// console.log(allheading1);

// allheading1[0].innerHTML="THIS IS HEADING 1";
// allheading1[1].innerHTML="THIS IS HEADING 3";
// allheading1[2].innerHTML="THIS IS HEADING 5";

// allheading1[0].computedStyleMap.backgroundcolor="lawngreen";
// allheading1[0].computedStyleMap.backgroundcolor="lawngreen";



// var allheading2=document.getElementsByClassName("heading2");
// console.log(allheading2);

// allheading2[0].innerHTML="THIS IS HEADING 2";
// allheading2[1].innerHTML="THIS IS HEADING 4";

//-------------------------------------------------------------------------------------------------------------------------------------

var paraTag=document.getElementsByTagName("p");
console.log(paraTag);

paraTag[0].innerHTML="THIS IS PARA TAG WITH INDEX 0";
paraTag[0].style.color="red";
paraTag[0].style.fontSize="25px";
paraTag[0].style.fontFamily="cursive";

paraTag[1].innerHTML="THIS IS PARA TAG WITH INDEX 1";
paraTag[1].style.color="red";
paraTag[1].style.fontSize="25px";
paraTag[1].style.fontFamily="monospace";

paraTag[2].innerHTML="THIS IS PARA TAG WITH INDEX 2";
paraTag[2].style.color="red";
paraTag[2].style.fontSize="25px";
paraTag[2].style.fontFamily="cursive";


var headingTag=document.getElementsByTagName("h1");
console.log(headingTag);

headingTag[0].innerHTML="THIS IS HEADING TAG WITH INDEX 0";
headingTag[0].style.color="blue";
headingTag[0].style.fontSize="25px";
headingTag[0].style.fontFamily="cursive";

headingTag[1].innerHTML="THIS IS HEADING TAG WITH INDEX 1";
headingTag[1].style.color="blue";
headingTag[1].style.fontSize="25px";
headingTag[1].style.fontFamily="monospace";

headingTag[2].innerHTML="THIS IS HEADING TAG WITH INDEX 2";
headingTag[2].style.color="blue";
headingTag[2].style.fontSize="25px";
headingTag[2].style.fontFamily="cursive";

var spanTag=document.getElementsByTagName("span")
console.log(spanTag);

spanTag[0].innerHTML="THIS IS SPAN TAG WITH INDEX 0";
spanTag[0].style.color="green";
spanTag[0].style.fontSize="25px";
spanTag[0].style.fontFamily="cursive";

spanTag[1].innerHTML="THIS IS SPAN TAG WITH INDEX 1";
spanTag[1].style.color="green";
spanTag[1].style.fontSize="25px";
spanTag[1].style.fontFamily="monospace";

spanTag[2].innerHTML="THIS IS SPAN TAG WITH INDEX 2";
spanTag[2].style.color="green";
spanTag[2].style.fontSize="25px";
spanTag[2].style.fontFamily="cursive";

//---------------------------------------------------------------------------------------------------------------------------------
//getElementsByName

var anchTag=document.getElementsByName("tej");
console.log(anchTag);

anchTag[0].innerHTML="THIS IS A HEADING TAG WITH INDEX 0";
anchTag[1].innerHTML="THIS IS A HEADING TAG WITH INDEX 1";
anchTag[2].innerHTML="THIS IS A HEADING TAG WITH INDEX 2";

//-----------------------------------------------------------------------------------------------------------------------------------
//QUERY SELECTOR()

document.querySelector("#para").innerHTML="THIS IS PARA TAG";
document.querySelector(".head").innerHTML="THIS IS HEADING TAG";
document.querySelector("span").innerHTML="THIS IS SPAN TAG";

//-----------------------------------------------------------------------------------------------------------------------------------
// QUERY SELECTOR ALL()

var paraTag=document.querySelectorAll("#paragraph");
var headingTag=document.querySelectorAll(".heading");
var spanTag=document.querySelectorAll("span");

console.log(paraTag);
console.log(headingTag);
console.log(spanTag);

paraTag[0].innerHTML="THIS IS PARA TAG WITH INDEX 1";
paraTag[1].innerHTML="THIS IS PARA TAG WITH INDEX 2";
paraTag[2].innerHTML="THIS IS PARA TAG WITH INDEX 3";

headingTag[0].innerHTML="THIS IS HEADING TAG WITH INDEX 0";
headingTag[1].innerHTML="THIS IS HEADING TAG WITH INDEX 1";
headingTag[2].innerHTML="THIS IS HEADING TAG WITH INDEX 2";

spanTag[0].innerHTML="THIS IS SPAN TAG WITH INDEX 0";
spanTag[1].innerHTML="THIS IS SPAN TAG WITH INDEX 1";
spanTag[2].innerHTML="THIS IS SPAN TAG WITH INDEX 2";












