
let btn = document.querySelector("#enter");
let output = document.querySelector("#output");


let numbers = [Math.floor(Math.random() * 100)]

let count = 0;
btn.addEventListener('click', function() {

    let input = document.getElementById('num').value;

    if(input == numbers){
        output.innerHTML = `Correct! Congratulations,  you guessed it right in ${count} attempts.`;
    }else if( input > numbers){
        output.innerHTML ='Wrong guess. Try again! Guess higher.';
    }else{
        output.innerHTML ='Wrong guess. Try again! Guess lower.';
    }

    count=count+1;
    // console.log("Times: "+count);
    
})

