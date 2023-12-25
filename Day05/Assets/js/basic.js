let message1 = "hello world ";
let message2 = "from JavaScript";

let obj ={
    name: "Sultana",
    age: 25,
    address: "Rustaq"
}
console.log(message1 + message2 + " , \n" +
 " My Name: " + obj.name + " Age: " + obj.age);
 console.log (`${message1} + ${message2}`);

 let age = 25;
 let val = age > 20 ? true: false;
 if(val){
    console.log("Door is open! ");
 }
 function sum(x, y=2){
    return x+y;
 }
 console.log(sum(3));
 console.log(sum(3 , 4));

//functionName   statment  ==> lamda exepression
 let xxy = () => "hello!";

 console.log(xxy());


//  let isDivisibaleBy3 = (x) => (x % 3 == 0);
//  let num = prompt(" Enter number : ");
//  alert(isDivisibaleBy3(num)? "is divisable by 3 " : "not divisable by 3");
//  console.log(isDivisibaleBy3(num));

 for (let i = 0; i < 10; i++) {
    let str = "*";
    // console.log(str.repeat(i));
    console.log(" ".repeat(i));
    console.log("*".repeat(i));
 }