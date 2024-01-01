const userinput = prompt ("enter your githup username : ")
const url = `http://api.github.com/users/${userinput}`;

// fetch(url)
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

async function loaddata(){
    let obj = await fetch(url);
    let dt = await obj.json();
    await console.log(dt);

    document.querySelector("#main").innerHTML = `<img src= ${dt.avatar_url} alt="Avatar" height="50px"; width="50px">`;
}
loaddata();