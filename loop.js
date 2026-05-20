for(let i=0; i<5; i++){
    console.log("For loop iteration: "+i);
}
let count=0;
while(count<3){
    console.log("While loop count: "+count);
    count++;
}
let i=0;
do{
    console.log("Do while loop: "+i)
    i++;
} 
while (i<2);


//array
let fruits = ["Apple","Kiwi","Cherry"];
console.log(fruits); 
fruits.push("Mango"); //adds an element
console.log(fruits.length);//ouput:4

//object, class
let student={
    firstName: "John",
    lastName: "Doe",
    age: 20,
    major: "CSE"
};
console.log(student["firstName"]);
student.age=21;
console.log(student.age);
let students =[
    {name: "Bob", grade: 92},
    {name: "Charlie", grade: 86}
]