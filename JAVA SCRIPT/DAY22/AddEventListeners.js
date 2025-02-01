// SYNTAX: element.addeventlistner("event",function(){
//                                       statments;
//                                    })


var allInputs=document.querySelectorAll("input");
console.log(allInputs);

allInputs[0].addEventListener("click",redCol)
function redCol(){
    document.body.style.backgroundColor="red";
}

allInputs[1].addEventListener("mouseover",function()
{
    document.body.style.backgroundColor="green";
})

allInputs[1].addEventListener("mouseout",function()
{
    document.body.style.backgroundColor="white";
})

allInputs[2].addEventListener("dblclick",function(){
    document.body.style.backgroundColor="blue";
})


allInputs[3].addEventListener("dblclick",function(){
    document.body.style.backgroundImage="linear-gradient(red,blue)";
})