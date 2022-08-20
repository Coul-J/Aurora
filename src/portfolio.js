let hambugerToggel = document.querySelector('.hamburger')
let menu = document.querySelector('.hamburger-menu')
let closeMenu = document.querySelector('.close')
let main = document.querySelector('.surface')
console.log(main)

hambugerToggel.addEventListener('click', () =>{
    menu.classList.add('active')

})

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('active')
})

menu.addEventListener('click',  ()=>{
    menu.classList.remove('active')
})
