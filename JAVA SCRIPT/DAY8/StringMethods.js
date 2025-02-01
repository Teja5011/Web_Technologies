// LENGTH METHOD()

var str="Appleeeee";
var str="teja hii";
console.log(str);

for(i=0;i<=str.length-1;i++){
    console.log(str[i]);
}

//----------------------------------------------------------------------------------------------------------------------------------

//SLICE METHOD()

var str="Apple";
console.log(str);

console.log(str.slice(0,3));
console.log(str.slice(-5,-3));
console.log(str.slice(-1,1));
console.log(str.slice(-5,4));
console.log(str.slice(0,-4));
console.log(str.slice(0));
console.log(str.slice(3));
console.log(str.slice(1,5));

//-----------------------------------------------------------------------------------------------------------------------------------

//SUB STRING()

var str="Apple";
console.log(str);

console.log(str.substring(0,4));
console.log(str.substring(0,-2));
console.log(str.substring(2,-2));
console.log(str.substring(1,-2));
console.log(str.substring(3,-2));
console.log(str.substring(-2,3));
console.log(str.substring(-5));
console.log(str.substring(5));

//-----------------------------------------------------------------------------------------------------------------------------------

//SUBSTR()

var str="Apple";
console.log(str.substr(0,3));
console.log(str.substr(-2,2));
console.log(str.substr(3,3));

//----------------------------------------------------------------------------------------------------------------------------------

//INDEXOF()

var str=`"she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells."`;

console.log(str);
console.log(str.indexOf("sells"));
console.log(str.indexOf("sells",6));
console.log(str.indexOf("sells",60));

//------------------------------------------------------------------------------------------------------------------------------------

//LAST INDEXOF()

var str=`"she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells."`;

console.log(str);
console.log(str.lastIndexOf("sells"));
console.log(str.lastIndexOf("sells",139));

//------------------------------------------------------------------------------------------------------------------------------------

//REPLACE() && REPLACEALL()

var str=`"she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells."`;

console.log(str);
console.log(str.replace("sells","prasanna"));
console.log(str.replaceAll("sells","sujatha"));
console.log(str.replace("sells","teja"));


console.log(str);
console.log(str.indexOf("sells",60));

//--------------------------------------------------------------------------------------------------------------------------------------

//write a code to replace in the position at 4 sells place

var str=`"she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells."`;


//divide upto line 96 first
var str1=str.slice(0,96);
console.log(str1);
 
// next divided from 97 seperate
var str2=str.slice(96);
console.log(str2);

str2=str2.replace("sells","teja");
str=str1+str2;
console.log(str);

//-------------------------------------------------------------------------------------------------------------------------------------

// STARTSWITH() && ENDSWITH() && INCLUDES()

var str=`she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells.`;

console.log(str);
console.log(str.startsWith("she"));
console.log(str.startsWith("She"));

console.log(str.endsWith("shells."));
console.log(str.endsWith("Shells."));

console.log(str.includes("shells."));
console.log(str.includes("Shells."));

console.log(str.includes("seashells"));
console.log(str.includes("Seashells"));

//-------------------------------------------------------------------------------------------------------------------------------------

//PADSTART()
  
var str="Apple";
var str1=str.padStart(5,"Mango");
var str2=str.padStart(101,"Mango ");

console.log(str);
console.log(str1);
console.log(str2);

//------------------------------------------------------------------------------------------------------------------------------------

//PADEND()

var str3="Apple";
var str4=str3.padEnd(7," orange");
var str4=str3.padEnd(75," orange");

console.log(str4);
console.log(str4);

//------------------------------------------------------------------------------------------------------------------------------------

//SPLIT()

var str=`she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
so if she sells shells on the seashore,
I'm sure she sells seashore shells.`;

console.log(str);
var arr=str.split("");              //without space letter by letter inside the array
console.log(arr);

var arr1=str.split(" ");            //with space word by word inside the array
console.log(arr1);

//-------------------------------------------------------------------------------------------------------------------------------------

//TRIM START() && TRIM END()

var str=" Web Technology ";
console.log(str);
var lengthstr=str.length;
console.log(lengthstr);

var bothSpaces=str.trim();
console.log(bothSpaces);
console.log(lengthstr);

var leftSpace=str.trimStart();
console.log(str);
var lengthstr=leftSpace.length;
console.log(lengthstr);

var rightSpace=str.trimEnd();
console.log(str);
var rightSpace=rightSpace.length;
console.log(lengthsbbtr);

//----------------------------------------------------------------------------------------------------------------------------------

//








































