//DATE CONSTRUCTOR (OR) DATE OBJECTS

console.log(Date());

//TO GET TIME

function dateandtime(){
    var date =new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    console.log(hh,mm,ss);


    //TO GET DATE
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    console.log(dd,mo,yy);
    
    
    //TO GET DATE WITH MONTH NAME
    var dd=date.getDate();
    var fullMonth=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    console.log(fullMonth);
    mo=fullMonth[mo];
    var yy=date.getFullYear();
    console.log(dd,mo,yy);

    //TO GET DAY
    var day=date.getDay();
    var fullDay=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
    day=fullDay[day]
    console.log(day);

    //TO GET DATE AND DAY
    // var dd=date.getDate();
    // var fullMonth=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    // console.log(fullMonth);
    // mo=fullMonth[mo];
    // var yy=date.getFullYear();
    // var day=date.getDay();
    // var fullDay=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
    // day=fullDay[day]
    // console.log(dd,mo,yy,day);

    //TO GET AM AND PM
    var Am_Pm="Am";
    // if(hh>=12)
    // {
    //     Am_Pm="pm";
    //     hh-=12;
    // }
    // else
    // {
    //     hh=12;
    // }
    // console.log(Am_Pm);

    document.getElementById("time").innerHTML=`${hh}:${mm}:${ss} ${Am_Pm}`;
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`;
    document.getElementById("day").innerHTML=`${day}`;

}
dateandtime();
setInterval(dateandtime,1000);
