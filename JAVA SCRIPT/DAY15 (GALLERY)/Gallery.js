var allImg=document.images;
console.log(allImg);

//allImg[0].src="./images/1.jpeg"

for(i=0;i<allImg.length-1;i++){
    allImg[i].src=`./images/${i+1}.jpg`
 
}

function fun(imagePath){
    document.getElementById("bigimage").style.backgroundImage=`url(${imagePath})`
}
