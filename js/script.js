/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
1. create array to push generated random numbers
2. generate random number
3. push random number in array (avoid duplicates)
4. display numbers
5. start counter (must be 30 seconds, for test only 10) 
6. hide numbers and ask user 1 by 1 wich ones he/she remembers
7. display results
    7.1 compare arrays
        7.2 if elements match save them and display as result
*/

// 1.
const randNumArr = [];
const userNumArr = [];

// 2.
function randomNumberGener(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

while(randNumArr.length < 8) {
    let randNum = randomNumberGener(1, 99);
    // 3.
    if(!randNumArr.includes(randNum)){
        randNumArr.push(randNum);
    }
}
console.log(randNumArr)

// 4.
randNumArr.forEach((element) => {
    document.getElementById('num-container').innerHTML += `
        <div class="numbers flexbox"> ${element} </div>`;
});    
// 5.
setTimeout(hideNumbers, 30000);

function hideNumbers () {
    // 6.
    document.getElementById('num-container').innerHTML = "";
    for(let i = 0; i < randNumArr.length; i++) {
        let userChosenNum = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta:"))
        userNumArr.push(userChosenNum);
    }  
    randNumArr.forEach((element) => {
        // 7.1
        userNumArr.forEach((secondElement) =>{
            // 7.2
            if(element === secondElement) {
                let howMany = document.querySelectorAll('.numbers');  
                console.log(howMany.length)  
                document.getElementById('results') .innerHTML = `
                <h2> Complimenti&excl; Hai indovinato ${howMany.length + 1} numeri </h2>`;          
                document.getElementById('num-container').innerHTML += `
                <div class="numbers flexbox"> ${element} </div>
                `; 
            }
        });
    })
} 

