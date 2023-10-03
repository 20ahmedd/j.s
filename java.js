//q1
function averge(x,z,c,v,b,n,s,m,a,q,w,e){
    value=(x+z+c+v+b+n+s+m+a+q+w+e)/12;
    return value;

}
console.log(averge(10,10,10,10,10,10,10,10,10,10,10,10))

//q2
function area(base,heigth){
    return base*heigth*0.5

}
console.log(area(10,10))
//q3
function age(age){
    return age*365.25

}
console.log(age(20))

//q4
function sum(num1,num2){
    return num1+num2

}
console.log(sum(10,10))

//q5
function getFirstElement(arr) {
        return arr[0];

}

const numbersArray = [1, 2, 3, 4, 5];
console.log( getFirstElement(numbersArray));

//q6

function showName() {
    var name = "ahmed  mahmoud mouhmaed mahmoud"; 
    document.getElementById("nameContainer").innerHTML =name;
}
showName();

//q7
function sec(hour){
    return hour*3600

}
console.log(sec(1));

//q10
function sum(num1,num2){
    return num1%num2

}
console.log(sum(11,10))

//q11
function modul(num1,num2){
    if(num1==num2){
        console.log("numbers is equle")
    }
    else if(num1>num2){
        console.log(num1)
        
    }
    else{
        console.log(num2)
    }
    
}
modul(11,10); 

//q12
function checkIfNumber(input) {
    if (!isNaN(input)) {
        console.log("Input is a number.");
    } else {
        console.log("Input is not a number.");
    }
}

// Example usage:
checkIfNumber("sadasd");

//q13
function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
    var day = currentDate.getDate().toString().padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
}

// Example usage:
var currentDate = getCurrentDate();
console.log("Current Date: " + currentDate);






//q8
function compare(x,y,z,c){
    var sum=x+y+z+c;
    if(sum>350){
        
        document.getElementById("idd").innerHTML ="true";
    }
    else{
        
        document.getElementById("idd").innerHTML ="false";
    }
    
}
compare(300,20,20,40);
//q9
function zero(x){

    if(x>0){
        
        document.getElementById("iddd").innerHTML ="true";
    }
    else{
        
        document.getElementById("iddd").innerHTML ="false";
    }
    
}
zero(5);
