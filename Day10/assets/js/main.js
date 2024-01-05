import User from "./user.js";
import calculateNetsalary from "./calculateSalary.js";

let user = new User("Sultana" , 1998 , calculateNetsalary(2000));

console.log(user);