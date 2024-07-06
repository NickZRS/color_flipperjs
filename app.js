const colors = ["Green", "Red", "Blue" ,"Purple", "Yellow", "Orange", "Gray", "Black", "White", "Pink", "Brown"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //pegar um número aleatório entre 0 - 10 por causa do indice do vetor das cores
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}