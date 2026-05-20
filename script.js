//primitive data type
let name="alice";
console.log(typeof name);
let age=30;
console.log(typeof age);
let isstudent=true;
console.log(typeof isstudent);
let score;
console.log(typeof score);
let car=null;
console.log(typeof car);
//non-primitive
let student={
    name: "arpita",
    age: 25,
    isstudent: true
}
console.log(student);
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(++a);
console.log(a++);
console.log(--a);
console.log(a--);
console.log(a);
let c=45;
let d="45";
console.log(c==d);
let marks=95;
if(marks>85){
    console.log("Excellent");
}
else if(marks>75){
    console.log("Good");
}
else{
    console.log("Work hard!");
}
let aged=20;
let status=(aged>=18)? 'Adult' : 'Minor';
console.log(status);
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday")
        break;
    default:
        console.log("Just another day")
    }