//forms

var form=document.forms
console.log(form);

form[0].elements[0].type="radio";
form[0].elements[1].type="checkbox";
form[0].elements[2].type="range";

form[1].elements[0].type="email";
form[1].elements[0].placeholder="enter ur name";
form[1].elements[0].required=true;

form[1].elements[1].type="password";
form[1].elements[1].placeholder="enter ur password";
form[1].elements[1].required=true;

form[1].elements[2].type="submit";
form[1].elements[2].value="login";

form[1].action="https://www.instagram.com/TEJA_5011_";

//-------------------------------------------------------------------------------------------------------------------------------------
// ANCHOR TAG

var anch=document.anchors
console.log(anch);

anch[0].innerHTML="Instagram";
anch[0].href="https://www.instagram.com";
anch[0].target="_blank";

anch[1].innerHTML="facebook";
anch[1].href="https://www.facebook.com";
anch[1].target="_blank";

anch[2].innerHTML="swiggy";
anch[2].href="https://www.swiggy.com";
anch[2].target="_blank";

anch[3].innerHTML="zomato";
anch[3].href="https://www.zomato.com";
anch[3].target="_blank";

//-------------------------------------------------------------------------------------------------------------------------------------
// BODY TAG

document.body.style.backgroundColor="red";
document.body.style.backgroundImage="linear-gradient(75deg,red,blue,yellow,green)"

//------------------------------------------------------------------------------------------------------------------------------------
// DOMAIN TAG

document.title="https://instagram.com"
document.domain="My title"
document.domain