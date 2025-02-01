// SET ATTRIBUTE && REMOVE ATTRIBUTE
document.querySelector("input").setAttribute("placeholder","Enter ur name");

document.querySelector("input").setAttribute("disabled",true);

document.querySelector("input").removeAttribute("disabled");

document.querySelector("input").setAttribute("type","password");



//------------------------------------------------------------------------------------------------------------------------------------
//TASK-1: IF THE PASSWORD LENGTH IS >=5 CHARACTERS THE LOGIN BUTTON SHOULD BE DISABLED

function fun()
{
    var valPassword=document.querySelector("#pass").value;
    var passwordLength=valPassword.length
    if(passwordLength>=5)
        {
            document.querySelector("#button").removeAttribute("disabled");
        }
        else
        {
            document.querySelector("#button").setAttribute("disabled",true);
        
        }
}

//-------------------------------------------------------------------------------------------------------------------------------------
//Task-2

function fun(){
    var firstName=document.querySelector("#fname").value;
    var lastName=document.querySelector("#lname").value;
    var givenPassword=document.querySelector("#pass").value;
    var confirmPassword=document.querySelector("#cpass").value;
    var phone_Number=document.querySelector("#mobie").value;
 
    if(firstName.length>0 && lastName.length>0 && givenPassword.length>0 && confirmPassword.length>0 && phone_Number.length>0 && confirmPassword.length>0)
    {
        document.querySelector("#button").removeAttribute("disabled")
    }
    else
    {
        document.querySelector("#button").setAttribute("disabled",true)

    }
}
fun()