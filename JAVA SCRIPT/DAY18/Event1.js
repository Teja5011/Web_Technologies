function inc(){
    if(num<10 && num>=0)
    {
        num++;
        document.getElementById("result").value=num;
    }
    
}

function dec(){
    if(num<=10 && num>0)
    {
        num--;
        document.getElementById("result").value=num;
    }
    
}

