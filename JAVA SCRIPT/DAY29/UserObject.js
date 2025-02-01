// CREATE USER OBJECTS (KEY:"VALUE")

var userObj={
    userFirstName:"prasanna",
    userLastNAME:"tej",
    userEmailId:"ravitejabandla5011@gmail.com",
    userMobileNumber:9542607687,
    userAddress:"vijayawada",
    49:"data",
    fullName:function(){
        return this.userFirstName+" "+this.userLastNAME;
    }

}
console.log(userObj);
console.log(userObj.userLastNAME);
console.log(userObj.userEmailId);
console.log(userObj.fullName());

//BY USING ARRAY WE CAN RETRIVE THE DATA
console.log(userObj.fullName());
console.log(userObj["userFirstName"]);

// BY USING OBJECT WE CAN NOT RETRIVE THE DATA IN NUMBERIC IT ACCEPTS ONLY IN TEXT DATA TYPE
// console.log(userObj.45);

// BY USING ARRAY WE CAN RETRIVE THE DATA IN BOTH  NUMBERIC AND TEXT DATA TYPE
console.log(userObj[49]);

//CREATE OBJECT WHICH IS PERFORM ARTHEMATIC OPERATIONS

var ariOp={
    add:function(num1,num2)
    {
        return num1+num2;
    },
    sub:function(num1,num2)
    {
        return num1-num2;
    },
    mul:function(num1,num2)
    {
        return num1*num2;
    },
    div:function(num1,num2)
    {
        return num1/num2;
    },
    mod:function(num1,num2)
    {
        return num1%num2;
    },
    exp:function(num1,num2)
    {
        return num1**num2;
    },
}
console.log(ariOp.add(5,4));
console.log(ariOp.sub(5,4));
console.log(ariOp.mul(5,4));
console.log(ariOp.div(5,4));
console.log(ariOp.mod(5,4));
console.log(ariOp.exp(3,2));


// CREATE OBJECT BY USING OBJECT CONSTRUCTOR

var userObject=new Object();
console.log(userObject);

userObject.userFirstName="teja",
userObject.userLastNAME="prasanna",
userObject.userEmailId="seelamprasanna23@gmail.com",
userObject.userMobileNumber=7675964378,
userObject.userAddress="chandragudem",

userObject.fullName=function(){
    return this.userFirstName+" "+this.userLastNAME;
}
console.log(userObject.fullName());

// WE CAN CREATE YOUR OWN CONSTRUCTOR
// CONSTRUCTOR IS IN PASCAL CASING, Object IS CAMEL CASING


function EmployeeDetails(empId,fname,lname,sal,emailId,department,designation,address)
{
    // BEFORE THIS KEYWORD EMPLOYEE DETAILS IS A FUNCTION, WHEN WE ASSSIGN THIS KEYWORD TO THE FUNCTION IT IS A CONSTRICTOR FUNCTION

    this.ID=emailId;
    this.firstName=fname;
    this.lastName=lname;
    this.salary=sal;
    this.emailId=emailId;
    this.dept=department;
    this.jobrole=designation;
    this.address=address;
}
console.log(EmployeeDetails);

var teja=new EmployeeDetails("TYPE449","seelam","lakshmi prasanna","1000","seelamprasanna23@gmail.com","software","developer","chandragudem");
console.log(teja);

this.fullName=function(){
    return this.firstName+" "+this.lastName;
}
console.log(EmployeeDetails);


















