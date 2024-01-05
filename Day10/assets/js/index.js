let user = {
    name : "Sultana",
    age : 25,
    gender : "female"
}
let {name : nickname } = user;
let {name , age , gender} = user;

let obj = {age , gender}

// console.log(name , age , gender);
// console.log(nickname);
// console.log(obj);

let arr = [1, 2 ,3 ]
let {0: ind0 , 1: ind1} = arr;
let x = ind0 + ind1;
// console.log(x);

let arr2 = ["sultana ", "balfoura"];
let {0: fname , 1: lname} = arr2;
let fullName = fname + lname;
// console.log(fullName);



let EnhancsSub = (x , y , ...args)=>{
    console.log(x);
    sub = x - y ;
    if(args.length !=0){
        for (let i = 0; i < args.length; i++) {
            sub -= args[i];
        }
    }
    return sub;
}

//console.log(EnhancsSub(2,3));
//console.log(EnhancsSub(3,4,6,2,1,5));

let arrSub = [1,3,2,4,4,5];
let arrSub2 = [...arrSub , 3,4,7];
console.log(EnhancsSub(...arrSub2));