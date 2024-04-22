//DAY 49 
//TASK 1 (Create a function the accepts a callback and invokes it with some arguments)
function executecallback(
    callback: (arg1: number, arg2: number)=> void,
    arg1: number,
    arg2: number
):void{
    callback(arg1 , arg2); //invokes the callback with the specified arguments
}
//example callback function that adds two numbers
let add= (a: number , b:number)=> {
    console.log(a + b); //Result the sum of a and b
}
executecallback(add, 5,3);  //Result 8
//invoking a callback function with arguments to perform an addition.

//TASK 2 (Show an example of a callback function used to filter an array of no)
let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
//uses .filter() with a callback function to filter out no greater than 5
let filterdnumbers: number[]= numbers.filter((number)=> number > 5);
console.log(filterdnumbers); //Result [6,7,8,9,10]
//the callback function here checks each no and filter() creates new array with no that meet the criteria

//TASK 3 (Explain how to handle errors in a callback pattern)
function fetchdata(
    callback: (error: Error | null , data? :string)=> void
): void  {
    let error = new Error ("Failed to fetch data");
    let data = "Some data";
    if(Math.random() > 0.5){
        callback(null ,data); //no error data is fetched successfully
    } else {
        callback(error); //passes error to the callback 
    }
}
fetchdata((error , data)=> {
    if(error){
        console.error(error.message); //handles the error
    } else {
        console.log(data); //process the data 
    }
});
//Demonstrate a callback pattern where errors are handled nicely