function fun(){
    var num=Math.floor(Math.random()*10000);
    otp=" "+num;
    console.log(num);

    /*
                (or)
        var num1=Math.floor(Math.random()*10);
        var num2=Math.floor(Math.random()*10);
        var num3=Math.floor(Math.random()*10);
        var num4=Math.floor(Math.random()*10);

        otp=""+num1+num2+num3+num4;
        console.log(num1+num2+num3+num4);

    */

    alert(`THIS IS UR OTP: ${otp}`)
}

function validOtp(){
    var userGivenotp=document.getElementById("otp").Value;
    if(userGivenotp==otp)
    {
        document.querySelector("form").action="https://www.instagram.com"
        document.querySelector("#submit").type="submit"
    }
    else
    {
        document.querySelector("#status").innerHTML="INVALID OTP";
        document.querySelector("#status").style.color="red";
    }

}