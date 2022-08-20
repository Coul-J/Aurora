let hambugerToggel = document.querySelector('.hamburger')
let menu = document.querySelector('.hamburger-menu')
let menuCloseOther = document.querySelector('.nav-close')
let closeMenu = document.querySelector('.close')
let main = document.querySelector('.surface')

hambugerToggel.addEventListener('click', () =>{
    menu.classList.add('active')

})

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('active')
})
menuCloseOther.addEventListener('click',  ()=>{
    menu.classList.remove('active')
})

console.log("This website was designed and developed by Kelvin Ohemeng - Kelvin's tudio")
console.log("Please share your feedback with me @kelvinohemeng59@gmail.com.")
console.log("THANK YOU !")