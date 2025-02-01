//FLAT METHOD

var obj={
    uName:"tej",
    uMobileNum:9542607687,
    uEmail:"ravitejabandla5011@gmail.com"
}
console.log(obj);


//CREATE OBJECT CONSTRUCTOR

// var objVal=Object.keys(obj);
// var objVal=Object.values(obj);
// var objVal=Object.entries(obj);
// objVal=objVal.flat();
// console.log(objVal);


//FREEZE METHOD

// console.log(obj);
// Object.freeze(obj);
// obj.uMobileNum=7675964378;
// delete obj.uName
// console.log(obj);


//SEAL METHOD

console.log(obj);
Object.seal(obj);       //WE CAN UPDATE, WE CANNOT DELETE
obj.uMobileNum=7675964378;
delete obj.uName;
console.log(obj);



