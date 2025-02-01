var rectangle=function(length,width){
    return length*width;
}
console.log(length=12,width=8);
console.log(`The area of rectangle is ${length*width}`);

var square=function(length,breadth){
    return length*breadth;
}
console.log(length=8,breadth=8);
console.log(`The area of square is ${length*breadth}`);

var triangle=function(breadth,height){
    return 0.5*breadth*height;
}
console.log(breadth=8,height=12);
console.log(`The area of rectangle is ${breadth*height}`);

var shaded=function(rectangle,square,triangle){
    return rectangle-square-triangle;
}
console.log(`The area of shaded part is ${rectangle-square}`);





