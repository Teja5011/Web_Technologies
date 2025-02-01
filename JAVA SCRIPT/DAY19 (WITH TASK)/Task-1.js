var allRightCircles=document.querySelectorAll(".rightcircle");
console.log(allRightCircles);

function fun(val){
    if(val=="one")
    {
        allRightCircles[0].style.transform="translate(-56vw)";
        allRightCircles[0].style.backgroundColor="green";
        allRightCircles[1].style.transform="translate(0vw)";
        allRightCircles[1].style.backgroundColor="red";
        allRightCircles[2].style.transform="translate(0vw)";
        allRightCircles[2].style.backgroundColor="red";
    }
    else if(val=="two")
    {
        allRightCircles[0].style.transform="translate(0vw)";
        allRightCircles[0].style.backgroundColor="red";
        allRightCircles[1].style.transform="translate(-56vw)";
        allRightCircles[1].style.backgroundColor="green";
        allRightCircles[2].style.transform="translate(0vw)";
        allRightCircles[2].style.backgroundColor="red";
    }
    else if(val=="three")
    {
        allRightCircles[0].style.transform="translate(0vw)";
        allRightCircles[0].style.backgroundColor="red";
        allRightCircles[1].style.transform="translate(0vw)";
        allRightCircles[1].style.backgroundColor="red";
        allRightCircles[2].style.transform="translate(-56vw)";
        allRightCircles[2].style.backgroundColor="green";
    }
    else
    {
        allRightCircles[0].style.transform="translate(0vw)";
        allRightCircles[0].style.backgroundColor="red";
        allRightCircles[1].style.transform="translate(0vw)";
        allRightCircles[1].style.backgroundColor="red";
        allRightCircles[2].style.transform="translate(0vw)";
        allRightCircles[2].style.backgroundColor="red";

    }
}

// var allLeftCircles=document.querySelectorAll(".leftcircle");
// console.log(allLeftCircles);

// function fun(val){
//     if(val=="four")
//     {
//         allLeftCircles[0].style.transform="translate(56vw)";
//         allLeftCircles[0].style.backgroundColor="green";
//         allLeftCircles[1].style.transform="translate(0vw)";
//         allLeftCircles[1].style.backgroundColor="red";
//         allLeftCircles[2].style.transform="translate(0vw)";
//         allLeftCircles[2].style.backgroundColor="red";
//     }
//     else if(val=="five")
//     {
//         allLeftCircles[0].style.transform="translate(0vw)";
//         allLeftCircles[0].style.backgroundColor="red";
//         allLeftCircles[1].style.transform="translate(56vw)";
//         allLeftCircles[1].style.backgroundColor="green";
//         allLeftCircles[2].style.transform="translate(0vw)";
//         allLeftCircles[2].style.backgroundColor="red";
//     }
//     else if(val=="six")
//     {
//         allLeftCircles[0].style.transform="translate(0vw)";
//         allLeftCircles[0].style.backgroundColor="red";
//         allLeftCircles[1].style.transform="translate(0vw)";
//         allLeftCircles[1].style.backgroundColor="red";
//         allLeftCircles[2].style.transform="translate(-56vw)";
//         allLeftCircles[2].style.backgroundColor="green";
//     }
//     else
//     {
//         allLeftCircles[0].style.transform="translate(0vw)";
//         allLeftCircles[0].style.backgroundColor="red";
//         allLeftCircles[1].style.transform="translate(0vw)";
//         allLeftCircles[1].style.backgroundColor="red";
//         allLeftCircles[2].style.transform="translate(0vw)";
//         allLeftCircles[2].style.backgroundColor="red";

//     }
// }






    

