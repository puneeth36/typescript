export{}
let commonUsername : string = 'user123';  
class Customer
{
    username:string;  
    rating:number;
    tutorial:string[] = [];

    constructor(username:string,rating:number)
    {
        this.username = username;
        this.rating = rating;
    }

   addTutorial(tutorialName:string):void
   {
        let a : boolean = this.rating<=5;
        let b : boolean = ((this.rating>2 && this.rating<5)&&this.tutorial.length>=2)?true:false;
           
        if( a || b)
        {
            console.log("Rating should be greater than 2 to purchase a tutorial");
        }
        else
        {
            this.tutorial.push(tutorialName);
            console.log("Tutorial "+tutorialName+"Added, total tutorials count is :-  "+this.tutorial.length);
        }
       
   } 

   showDetails()
   {
       console.log("--------------------------------------")
       console.log(" User Name  "+this.username);
       console.log(" Rating "+this.rating);

       this.tutorial.forEach(t=>{
           console.log(t);
       })
       
   }
}

let a1 = new Customer('Ramesh',3);
a1.addTutorial("My Tutorial - 1");
a1.addTutorial("My Tutorial - 2");
a1.addTutorial("My Tutorial - 3");
a1.showDetails();

let a2 = new Customer('Amit',2);
a2.addTutorial("My Tutorial - 1");
a2.addTutorial("My Tutorial - 2");
a2.showDetails();

a2.addTutorial("My Tutorial - 3");
a2.showDetails();