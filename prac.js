// JAVA SCRIPT FUNDAMENTAL PART 1 //

const birthYear = 2003 ;
let century 
if(birthYear<2003){
       century = 20;
       console.log("He/She can have a driving licence")
}else{
      century = 21 ;
     console.log("He/She can't have a driving licence")
}
console.log(century);

// code challange #2 

const massMark = 80.59 ;
const heightMark = 5.78 ;
const massJohn = 83.42 ;
const heightJohn = 3.45 ;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJohn =  massJohn / ( heightJohn * heightJohn) ;
const markHigherBMI = BMIMark > BMIJohn ;
console.log(BMIMark , BMIJohn) ;
if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than Joh's (${BMIJohn})`);
}
else {
     console.log(`John's BMI (${BMIJohn})  is higher than Mark's (${BMIMark})`)
}

// To conert numbers into strings 
const ageYear = 2000 ;
console.log(Number(ageYear));
console.log(ageYear+18);
console.log(String(20),20);

// type coercion
console.log(`I am a ` + 23 + ` years old`);
console.log(`I am a ` + `23` + ` years old`);
console.log(`I am a ` + String(23) + ` years old`);
console.log(`23` - `10` - `3`);

let n = 1 + 1 ;
console.log(n);

// 5 falsy value and 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('utsav'));
console.log(Boolean({}));
console.log(Boolean(``));

const Money = 100 ;
if( Money ) {
     console.log("You won't be able to buy the things")
}else {
     console.log("You will be able to buy the things ")
}
// Here 0 is falsy value that's why we get the else code in result 
// If there is other than 0 we will get the if statment as a result 

let Height ;
if(Height){
     console.log("yeyyyy! Height is defiend" );
}else{
     console.log('Height is not defined ');
}
// When somthing is not defined we will get this type of result 


const firstName =  'UTSAV' ;
const firstJob   = 'IOS Devloper';
const Age = 20 ;
if(Age>=18){
     console.log("UTSAV can visit the club ");
}else{
     console.log("UTSAV can't visit this because you are under age to visit this");  
}

// == - == statement 
const age = '20' ;
if(age == 20) console.log("You just become an adult  :D strict");

const favourite = prompt("What's your favourite number? ");
console.log(favourite);
console.log( typeof favourite);
if (favourite == 11 ) {
     console.log("Cool 11 is an amazing number");
} else if(favourite == 10 ){
     console.log("Cool 10 is also GOATED number ");
} else {
     console.log("Number is not GOATED");
}

//The && and || Operators in JavaScript. If applied to boolean values, the && operator only returns true when both of its operands are true (and false in all other cases), while the || operator only returns false when both of its operands are false (and true in all other cases)

const hasDriverLicence = true ; // A 
const hasGoodVision   = true ; //b
//console.log(hasDriverLicence && hasGoodVision); // && = and oprator 
console.log(hasDriverLicence || hasGoodVision); // || = and oprator  , ! = not oprator 

const shoudDrive = hasDriverLicence && hasGoodVision ;
const isTired = true ;
if(hasDriverLicence && hasGoodVision && !isTired){
     console.log("Utsav should drive the car")
}else{
     console.log("Someone shoud drive the car")
}

// Switch statement and break 

const day = 'monday' ;
switch(day){
     case 'monday' :
     console.log('Doing Shoulder workout')
     console.log('Go to Gym meet up')
     break ;
     case 'tuesday' :
     console.log('chest workout day');
     break ;
     case 'wednesday':
     console.log('Bicep and Tricep day');
     break ;
     default :
     console.log('Not a valid day');
}

/* without using with , if else 
if(day == monday){
   console.log("Go to Gym")
} else if (day == tuesday){
    console.log("Go to the tample")
} else {
     console.log("Not a valid day")
} */

// differnce btw statement and expression 
if(11>1) {
     const str = '11 is bigger'
}


let ageGroup = 33

switch (ageGroup ){
  case '0...16':
    console.log("Child")
     break
  case '17...30' :
    console.log("Young Adults")
     break
  case '31...45':
    console.log("Middle-aged Adults")
      break
  default:
    console.log("Old-aged Adults")
}

const bill = 285 ;
const tip = bill <= 300 && bill >= 50 ?  bill * 0.15  : bill * 0.2 ;
console.log(`The bill was ${bill} , the tip was ${tip} , and the total bill was ${bill + tip}`);
