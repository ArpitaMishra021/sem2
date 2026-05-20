function calculateBill(){
let n = document.getElementById("units").value;
let total = 0;
for(let i=1;i<=n;i++){
let units = parseFloat(prompt("Enter units consumed for Reading " + i));
total = total + units;
}
let average = total / n;
let rate;
let status;
if(average <= 100){
rate = 5;
}
else if(average <= 200){
rate = 7;
}
else if(average <= 300){
rate = 9;
}
else{
rate = 12;
}
let bill = total * rate;
if(bill <= 1000){
status = "Low Consumption";
}
else{
status = "High Consumption";
}
document.getElementById("result").innerHTML =
"Total Units: " + total + "<br>" +
"Average Units: " + average.toFixed(2) + "<br>" +
"Rate per Unit: ₹" + rate + "<br>" +
"Total Bill: ₹" + bill + "<br>" +
"Status: " + status;
}