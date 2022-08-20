let reduce = document.getElementById('reduce');
let add = document.getElementById('add');
let increment = document.querySelector('.q-increment');
let addToCart = document.querySelector('#atc-in');

let number = 1



function incrementUp () {
    number++;
    increment.textContent = number
}
function incrementDown () {
    if (number > 1){
        number--;
        increment.textContent = number
    }
}






