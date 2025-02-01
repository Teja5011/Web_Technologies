// write function to print fizz for three multiples of 3, buzz for multiples 5 and fizzbuzz for the multiples of 3 && 5?

function fun(){
    for(i=0;i<=300;i++)
    {
        if (i%3==0 && i%5==0)
         {
           console.log("FizzBuzz");
            
        }
        else if(i%3==0)
        {
            console.log("fizz");
            
        }
        else if (i%5==0)
        {
            console.log("buzz");
            
        }
        else{
            console.log(i);
            
        }

    }
}
fun()

