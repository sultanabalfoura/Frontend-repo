let title = document.getElementById('title');
let price = document.getElementById('price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood ='create';
let temp;

// console.log(title, price, tax, ads, discount, total, count, category, submit);
//get total
function getTotal(){
    if(price.value != ''){
        //convert string to number add +
        let result = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '';
        total.style.background = '#904c4c';
    }
}

//create product
let datapro;
//save localstorage
if(localStorage.product != null){
    datapro= JSON.parse(localStorage.product);
}else{
    datapro = [];
}

submit.onclick = function(){
    let newpro = {
        title:title.value.toLowerCase(),
        price:price.value,
        tax : tax.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
    //save localstorage
    if (title.value != '' && price.value != '' && category.value !='' && newpro.count < 100 ){
        if(mood == 'create'){
            if (newpro.count > 1){
            for (let i = 0; i < newpro.count; i++) {
                datapro.push(newpro);
            }
            }else{
                datapro.push(newpro);
            }
        }else{
            datapro[temp]=newpro
            mood='create';
            submit.innerHTML = 'Create';
        }
    }else{
        cleardata();
    }
    
   
    // datapro.push(newpro);
    localStorage.setItem('product', JSON.stringify(datapro))
    cleardata();
    showData();
    // console.log(datapro)
}

//clear inputs
function cleardata(){
    title.value = '';
    price.value='';
    tax.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}

//read

function showData(){

    let table = ''; 
    for (let i = 0; i < datapro.length; i++) {
        table +=`
            <tr>
                <td>${i+1}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].tax}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update"> update </button></td>
                <td><button onclick="deleteData (${i})" id="delete"> delete </button></td>
            </tr>
        `;
    }
        document.getElementById('tbody').innerHTML = table;
        let btnDelete = document.getElementById('deleteAll');
        if(datapro.length > 0){
            btnDelete.innerHTML = `<button onclick="DeleteAll()">  Delete All </button>`;
        }else{
            btnDelete.innerHTML = '';
        }
}
showData();
//count one or more product
//delete

function deleteData(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData();
}

function DeleteAll(){
    localStorage.clear();
    datapro.splice(0);
    showData();
}

//update

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    tax.value = datapro[i].tax;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    getTotal();
    count.style.display = "none";
    category.value = datapro[i].category;
    submit.innerHTML = 'update';
    mood ='update';
    temp =i;
    scroll({
        top : 0,
        behavior:'smooth'
    })
}
//search

let searchmood = 'title';

function getSearchMood(id){

    let search = document.getElementById("search");
    if(id == 'searchTitle'){
        searchmood = 'title';
        search.placeholder = 'search by title';
    }else{
        searchmood = 'category';
        search.placeholder = 'search by category';
    }
    search.focus();
    search.value = '';
    showData();
}

function searchData(value){
    let table = '';
    if(searchmood == 'title'){
        
        for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].title.includes(value)){
                table +=`
            <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].tax}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update"> update </button></td>
                <td><button onclick="deleteData (${i})" id="delete"> delete </button></td>
            </tr>
        `;
            }
        }
    }else{
        for (let i = 0; i < datapro.length; i++) {
            if(datapro[i].category.includes(value)){
                table +=`
            <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].tax}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update"> update </button></td>
                <td><button onclick="deleteData (${i})" id="delete"> delete </button></td>
            </tr>
        `;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;

}

//clean data
