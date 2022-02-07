

let age = 3000
let future = 5 
let future_age = future + age
console.log (" You will be ", future_age,  " in five years")
console.log ("\n")


let num1 =4 
let num2 = 17
let result = num1 + num2
console.log (" 4 + 17 =   ", result)
console.log ("\n")


let Name = "Bucephalus"
console.log ("Hello", Name)
console.log ("\n")


let x = 70
let y = 3
console.log ("The remainder of 70 divided by 3 is ", x/y )
console.log ("\n")






function Point(x,y,x1,y1){
    let.x = x;
    let.y = y;
    let.x1 = x1;
    let.y1 = y1;

    let.distanceTo = function (point)
    {
        var distance = Math.sqrt((Math.pow(let.x1-let.x,2))+(Math.pow(let.y1-let.y,2)))
        return distance;
    };
}

var newPoint = new Point (10,100);
var nextPoint = new Point (25,5);


console.log(newPoint.distanceTo(nextPoint));