
// let tagname = document.getElementsByTagName("div");
// let calssname = document.getElementsByClassName("sec");
// // calssname[0].innerHTML += "<h1> hello from inner Html</h1>";
// calssname[1].textContent = "<h1> hello from text content </h1>";

let idname = document.getElementById("main");
// idname.innerHTML += "<h2>this is inner html from id </h2>"

// add event
let flag = false; 
idname.addEventListener("click" , (e)=>{
    // console.log(e.target.calssname);
    if(e.target.className == "hhh" && flag == false){
        idname.style.backgroundColor = "red";
        idname.style.width ="50%";
        flag = false;
    }else{
        idname.style.backgroundColor = "white";
        idname.style.width = "100%" ;
        flag = true;
    }
})
