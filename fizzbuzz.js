


// Now we run the main function...
//fizzbuzz();


let seven = [];
let three = [];
let five = [];
let eleven = [];
let thirteen = [];
let seventeen = [];
// Here, we create our main function.
//#region FizzBuzz function
function fizzbuzz() 
{
    // I'll create arrays to store the multiples of each numbers (7, 3, 5, 11 , 17) later on......   

    

    let index = 0
    // for loop to find every number to 100
    for (let i = 0; i <= 100; i++)
     {
         
        method3and5(i); // Multiples of 3 or 5 and its conditions (multiples of 17 included)
        method7(i); // Multiples of 7 and its conditions (multiples of 17 included)
        method13(i); //Multiples of 13 and its conditions (multiples of 17 included)
        method11(i); // Multiples of 11 
              
           
       
        
        
    }
    
    
}
//#endregion


//#region Method 3 & 5
function method3and5(i)
{
    if (i % 3 == 0 && i % 5 == 0) { // Multiple of 3 and 5
       
        if (i % 17 == 0) 
        {
            console.log("BuzzFizz (Multiple of 3, 5 and 17)") //Multiple of 3, 5 and 17
            three.push(i);
            five.push(i);
            seventeen.push(i);
        }

        else
        {
            console.log("FizzBuzz (Multiple of 3 and 5)"); // Multiple of 3 and 5
            three.push(i);
            five.push(i);
        }
        


       
    }     
    

    else if (i % 3 == 0) { // Multiple of 3
        console.log("Fizz (Multiple of 3)");
        three.push(i);
    }

    else if (i % 5 == 0) { // Multiple of 5
        console.log("Buzz (Multiple of 5)");
        five.push(i);
    }

    

    else { // not multiple of anything
        console.log(i);
    }
}
//#endregion

//#region Method 7
function method7(i)
{
     if (i % 7 == 0) { // Multiple of 7
          
        if (i % 3 == 3)
        {             
            if (i % 17 == 0) 
            {
            console.log("BangFizz (Multiple of 7 and 17)") //Multiple of 7, 3 and 17
            seven.push(i);
            three.push(i);
            seventeen.push(i);
            }   
            else 
            {
                console.log("FizzBang (Multiple of 7 and 3)");  // Multiple of 7 and 3
                seven.push(i);
                three.push(i);
            }
                                          
        }

       else if (i % 5 == 0) // Multiple of 5
        {    
            if (i % 17 == 0) 
            {
                console.log("BangBuzz (Multiple of 5 and 17)")
                five.push(i);
                seventeen.push(i);
            }   
            else  
            {
                console.log("BuzzBang (Multiple of 5)"); // Multiple of 5
                five.push(i);
            }     
            
        }
        
       else {console.log("Bang (Multiple of 7)"); seven.push(i);} // Multiple of 7
    }
}
//#endregion

//#region Method 13
function method13(i)  // Method for the section 3 of "Part 3"
{
          
            if (i % 13 == 0)
            {
                if(i % 7 == 0) // Multiple of 13 and 7
                { 
                    if (i % 3 == 0 ) // 13, 7 and 3  multiples
                    {                      
                        if (i % 11 == 0)
                        {
                            if (i % 17 == 0) 
                            {
                                console.log("BongBangFezzFizz (Multiple of 13, 7, 3 and 17)") // 13, 7, 3 and 17
                                thirteen.push(i);
                                seven.push(i)
                                three.push(i)
                                seventeen.push(i)
                            }
                            else 
                            {
                            console.log("FizzFezzBangBong (Multiple of 13,7 and 3)")  // 13, 7, 3
                            thirteen.push(i)
                            seven.push(i)
                            three.push(i)
                            }
                        }

                        else if (i % 5 == 0) // 13, 7, 3 and 5 multiples
                        {
                            if (i % 17 == 0) 
                            {
                                console.log("BongBuzzBangFezzFizz (Multiples of 13, 7, 3, 5 and 17") // 13, 7, 3, 5 and 17
                                thirteen.push(i)
                                seven.push(i)
                                three.push(i)
                                five.push(i)
                                seventeen.push(i)
                            }
                            else
                            {
                                console.log("FizzFezzBangBuzzBong (Multiple of 13, 7, 3 and 5)") // 13, 7, 3 and 5 multiples
                                thirteen.push(i)
                                seven.push(i)
                                three.push(i)
                                five.push(i)

                            }
                        }


                        else 
                        {
                            if (i % 17 == 0)
                            {
                                console.log("BangFezzFizz (Multiples of 13, 7, 3 and 17)") // 13, 7, 3, 17
                                thirteen.push(i)
                                seven.push(i)
                                three.push(i)
                                seventeen.push(i)
                            }
                            else 
                            {
                            console.log("FizzFezzBang (Multiple of 13, 7 and 3)")
                            thirteen.push(i)
                            seven.push(i)
                            three.push(i)

                            }
                        }
                    }   

                    else if (i % 5== 0 ) // 13, 7 and 5
                    {
                        if (i % 11 == 0) // 13, 7, 5 and 11
                        {
                            if (i % 17 == 0) 
                            {
                                console.log("BongBuzzBangFezz (Multiples of 13, 7, 5, 11 and 17")
                                thirteen.push(i)
                                seven.push(i)
                                five.push(i)
                                eleven.push(i)
                                seventeen.push(i)
                            }
                            else
                            {
                                console.log("FezzBangBuzzBong (multiples of 13, 7, 5 and 11)");
                                thirteen.push(i)
                                seven.push(i)
                                five.push(i)
                                eleven.push(i)
                            }
                            
                        }

                        else // 13, 7 and 5
                        {
                            if (i % 17 == 0)
                            {
                                console.log("BuzzBangFezz (Multiples of 13, 7, 5 and 17)") // 13, 7, 5 and 17
                                thirteen.push(i)
                                seven.push(i)
                                five.push(i)
                                seventeen.push(i)
                            }
                            else 
                            {
                                console.log("FezzBangBuzz (multiples of 13, 7, and 5)") // 13, 7 and 5
                                thirteen.push(i)
                                seven.push(i)
                                five.push(i)
                            }
                            
                        }
                    }

                    

                    else // 13 and 7
                    {                        
                        
                        if(i % 11 == 0)// 13, 7 and 11
                        {
                            if (i % 17 == 0) 
                            {
                                console.log("BongBangFezz (Multiple of 13, 7, 11 and 17)") // 13, 7, 11, 17
                                thirteen.push(i)
                                seven.push(i)
                                eleven.push(i)
                                seventeen.push(i)

                            }
                            
                            else 
                            {
                                console.log("FezzBangBong (Multiple of 13, 7 and 11)") // 13 and 7
                                thirteen.push(i)
                                seven.push(i)
                            }
                            
                        }

                        else
                        {
                            if (i % 17 == 0) //13 and 7
                            {
                                console.log("BangFezz (Multiple of 13, 7 and 17") // 13, 7 and 17
                                thirteen.push(i)
                                seven.push(i)
                                seventeen.push(i)
                            }
                            else
                            {
                                console.log("FezzBang (Multiple of 13 and 7)"); //13 and 7
                                thirteen.push(i)
                                seven.push(i)
                            }
                            
                        }
                    }

                }

                else if (i % 11 == 0) // 13 and 11
                {
                    if (i % 17 == 0) 
                    {
                        console.log("BongFezz (Multiple of 13, 11 and 17") // 13, 11 and 17
                        thirteen.push(i)
                        eleven.push(i)
                        seventeen.push(i)
                    }
                    else
                    {
                        console.log("FezzBong (Multiple of 13 and 11)") // 13 and 11
                        thirteen.push(i)
                        eleven.push(i)
                    }
                    
                }


                else 
                {
                    console.log("Fezz (Multiple of 13)") // Multiple of 13 only
                    thirteen.push(i)
                }
            }
            

}

//#endregion

//#region Method 11
function method11(i)
{
    if (i % 11 == 0)
    {
        
        console.log("Bong (Multiple of 11)")
        eleven.push(i)
    }
}
//#endregion


