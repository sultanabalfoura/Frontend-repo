let booklist = document.querySelector("#booklist");
let addbtn = document.querySelector("#addbtn");
let bookname = document.querySelector("#bookname");
let lilist = document.querySelector("#lilist");
let hide = document.querySelector("#hide");
console.log(addbtn)
addbtn.addEventListener('click', (e)=>{
    let name = bookname.value;
    let li = document.createElement("li");
    let spn1 = document.createElement("span");
    let spn2 = document.createElement("span");
    spn1.textContent = name;
    spn2.textContent = "Delete";
    li.className ="d-flex align-content-center justify-content-center px-5 my-4";
    spn2.className +="btn btn-dark";
    li.appendChild(spn1);
    li.appendChild(spn2);
    booklist.appendChild(li);
    bookname.value = "";
});

booklist.addEventListener('click' , (e)=>{
    
    if(e.target.className == "btn btn-dark"){
        e.target.parentElement.remove();
    }
    console.log(e.target.parentElement);
});

let flag =true;
hide.addEventListener('click' , (e)=>{
    if(flag){
        booklist.style.display = "none";
        flag = false;
    }else{
        booklist.style.display = "block";
        flag = true;
    }
})