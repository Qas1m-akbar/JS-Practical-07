let userString = prompt("Please enter your string")
let index = +prompt("Please enter index here")

// USing if check Conditon //

if(index >=0 && index <= userString.length){
    alert("The character at index: " + index + " is " + userString.charAt(index))

}
 else{

    alert("ERROR")

}



// Question 02 //

let mainString = prompt("Enter the main string to search");
let searchString = prompt("Enter the substring to search");
let replacementString = prompt("Enter the string you wanna replace");
let modifiedString = mainString.replace((searchString),replacementString);

alert("The modified string is : " + modifiedString);



// Question 03 : this method search the nearest one and rounded to that one  //

let userNum = +prompt("Enter your Number");

alert("The rounded number is : " + Math.round(userNum));




// Question 04 --> ceil() method round number to next high number//

alert("The rounded number is : " + Math.ceil(userNum));



// Question 05 --> ceil() method round number to same number//

alert("The rounded number is : " + Math.floor(userNum));









