var num=0;
function cursorHover(){
    num++;
    console.log(num);

    if(num==0)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/1.png)`        
    }
    else if(num==1)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/2.jpg)`        
    }
    else if(num==2)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/3.jpeg)`        
    }
    else if(num==3)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/4.jpg)`        
    }
    else if(num==4)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/5.jpg)`        
    }
    else if(num==5)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/6.jpeg)`        
    }
    else if(num==6)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/7.png)`        
    }
    else if(num==7)
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/8.png)`        
    }
    else
    {
        document.getElementById("container").style.backgroundImage=`url(../../ASSERTS/IMAGES/9.png)` 
        num=0; 
    }
}
cursorHover();