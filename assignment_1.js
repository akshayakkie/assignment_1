/* Qusetion_1 - Q1 Writ a program that grads studnts basd on thir mar s
 If gratr than 90 thn A Grad
 If btwn 70 and 90 thn a B grad
 If btwn 50 and 70 thn a C grad
 Blow 50 thn an F grade*/
 
const marks=70;
let grade
if(marks>90){
    grade='A grade '
}else if(marks>70 && marks<90){
    grade='B grade'
}else if(marks>50 && marks<70){
    grade='C grade'
}else{
    grade='F grade'
}

console.log(grade);

 /*Q2 Gnrat numbrs btwn any 2 givn numbrs.*/

 const num1 = 20
 const num2 = 45;

for(let i=num1+1;i<=num2;i++){
    console.log(i);
}

/*Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.*/

const num=9;
 num>0 
 ?console.log("postive")
 :num<0
 ?console.log("negative")
 :console.log("zero");

/*Q4. Describe the usage of the comma operator in JavaScript and provide an example.

comma operator is used to provide multiple expression of a same type of data type , so we need not to initialize 
them again and again in a different row*/

const a=9,b=4,c=2
console.log(a,b,c);

/*Q5. You're creating a basic login system. Make a login function with two things: a username and a
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
successful"; if not, show "Invalid credentials." */

let username='admin'
let password=12345
if(username==admin && password==12345){
    console.log('log in successful')
}
else{
    console.log('Invalid credentials')
}

/*Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.*/

let paymentmethod="credit";

switch(paymentmethod){
    case "credit":
        console.log("credit may have a processing fee of 2%")
        break;
        case "debit":
        console.log("debit may have a processing fee of 1.5%")
        break;
        case "paypal":
        console.log("paypal may have a processing fee of 3%")
        break;
        default:
            console.log("invalid payment method");

}

/*Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".*/

let currencondition=22;

let weathercondition=currencondition>30?"hot":"moderate"
console.log(weathercondition)

/*Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.*/

let number=5;
let sum=0;
let starting_no=1

do{
  sum+=starting_no;
  starting_no++;
}while(starting_no<=number)

console.log(sum)