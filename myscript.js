
var introduction =prompt("want to know if we are connected?")
var myfeedback = alert("your said: "+introduction+ "Thefore: you are connected!!!!!")
console.log("your said: "+introduction+ "Thefore: you are connected!!!!!")

var hot=false;

var temp=44;


if (true){
    console.log("I ran the marathon")
}

if (temp>80){
    hot=true;
    console.log("It is very hot in here");
}
else if(temp==0)
    {console.log("no such thing!!")}
else
{
    console.log(temp+ " is not a very hot weather");
}


var x=0;

while(x<5){
    console.log("we are increamenting towards five by adding 1 at each step");
    console.log(x);
    if(x==3){
        console.log("X IS EQUAL TO THREE")
        break;
    }
    x+=1;
}

var tester=false
while(tester!=5){
    tester=prompt("enter number")
}

var x=0;

while(x<=10){
if(x%2==0)
   {console.log(x);} 
    x+=1
}