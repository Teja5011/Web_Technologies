// CREATING ELEMENT BY JS

var div1=document.createElement("div");
console.log(div1);

document.body.appendChild(div1);
div1.style.width="500px";
div1.style.height="400px";
div1.style.backgroundColor="red";
div1.style.border="5px solid black";


var div2=document.createElement("div")
console.log(div2);

div1.appendChild(div2);
div2.style.width="50%";
div2.style.height="50%";
div2.style.backgroundColor="yellow";
div2.style.border="5px solid black";



//CREATING FORM BY JS

 


var form=document.createElement("form");
console.log(form);
document.body.appendChild(form);

var tab=document.createElement("table");
form.appendChild(tab);

var row=[];
var td=[];

for(i=0;i<=4;i++)
{
    row[i]=document.createElement("tr");
    tab.appendChild(row[i])

    if(i==1 || i==2)
    {
        for(j=0;j<=1;j++)
        {
            td[j]=document.createElement("td");
            row[i].appendChild(td[j])
            td[j].style.border="2px solid black";
        }
    }
    else
    {
        var td1=document.createElement("td");
        row[i].appendChild(td1);
        td1.colSpan="2"
    }
}

var allForm=document.forms;
var allTab=document.getElementsByTagName("td");
console.log(allTab);

allTab[0].innerHTML="LOGIN FORM";
allTab[1].innerHTML="Username";
allTab[3].innerHTML="Password";

var inp=[];
for(i=0;i<=2;i++)
{
    inp[i]=document.createElement("input");
}

allTab[2].appendChild(inp[0]);
allTab[4].appendChild(inp[1]);
allTab[6].appendChild(inp[2]);

inp[0].type="email";
inp[0].placeholder="Enter ur username";

inp[1].type="password";
inp[1].placeholder="Enter ur password";

inp[2].type="button";
inp[2].value="submit";

inp[2].addEventListener("click",function(){
    var email=inp[0].value;
    var password=inp[1].value;

    if(email=="ravitejabandla5011@gamil.com" && password=="5011")
    {
        inp[2].type="submit";
        allForm[0].action="https://www.instagram.com";
    }
    else
    {
        allTab[5].innerHTML="INVALID USERNAME AND PASSWORD";
        allTab[5].style.color="red";
    }
})





