function myInchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var nanaFeet = 456;
var feet = myInchToFeet(nanaFeet);
console.log(feet);

var naniFeet = 556;
var feet = myInchToFeet(naniFeet);
console.log(feet);

var dadaFeet = 436;
var feet = myInchToFeet(dadaFeet);
console.log(feet);


var dadiFeet = 76;
var feet = myInchToFeet(dadiFeet);
console.log(feet);





function milesToKm(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = milesToKm(26.2);
console.log(marathon);












function isEven(number) {
    if(number % 2 == 0){
        return true;
    }
    else(number % 2 != 0);{
        return false;
    }
}

// const myNumber = 451;
// const myEvenNumber = isEven(myNumber);
// console.log(myEvenNumber); 


// function isLeapYear(year) {
//     if(year % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myYear = 2456;
// const isMyYearLipeYear = isLeapYear(myYear);
// console.log(isMyYearLipeYear);




function leapYear(year){
    var result; 
    year = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = true
    }
    else if(years/100){
      result = false
    }
    else if(years/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }

 const myYear = 2100;
const isMyYearLipeYear = leapYear(myYear);
console.log(isMyYearLipeYear);





// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
        return true;
    } else {
        console.log(year + ' is not a leap year');
        return false;
    }
}

 const myYear = 2120;
const isMyYearLipeYear = checkLeapYear(myYear);
console.log(isMyYearLipeYear);

var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log(factorial);