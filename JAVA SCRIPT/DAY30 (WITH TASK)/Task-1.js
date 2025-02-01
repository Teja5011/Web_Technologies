function Bankoperation(owner,balanace){
    this.owner=owner;
    this.balanace=balanace;

    //DESPOSITING

    this.deposit=function(amount){
        this.balanace+=amount;
        console.log(`${owner} deposited ${amount}₹. New balance ${this.balanace}`);
        
    }

    //WITH DRAW

    this.withdraw=function(amount){
        if(balanace<=this.balanace)
        {
            this.balanace-=amount;
            console.log(`${owner} withdraw a amount of ${amount}. Remaining amount is ${this.balanace}`);
            
        }
        else
        {
            console.log(`INSUFFIENT FUNDS PRESENT IN THE ACCOUNT. YOUR CURRENT BALANCE IS ${this.balanace}`);
            
        }
    }
    
}
console.log(Bankoperation);

var tej=new Bankoperation("tej",2900);
console.log(tej);
tej.deposit(2000);
tej.withdraw(4900);
tej.withdraw(1);

