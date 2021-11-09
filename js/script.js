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
6. hide numbers and ask user 1 by 1 wich he remembers
7. display results
*/

// 1.
const randNumArr = [];

// 2.
function randomNumberGener(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

while(randNumArr.length < 8) {
    let randNum = randomNumberGener(1, 9);
    // 3.
    if(!randNumArr.includes(randNum)){
        randNumArr.push(randNum);
    }
}

// 4.
randNumArr.forEach((element) => {
    document.getElementById('num-container').innerHTML += `
    <section id="num-container" class="flexbox">
        <div class="numbers flexbox"> ${element} </div>
    </section>`;
});    

setTimeout(hideNumbers, 10000);

function hideNumbers () {
    document.getElementById('num-container').innerHTML = "";  
} 

