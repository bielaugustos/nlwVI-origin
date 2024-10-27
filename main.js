// DOM - DOCUMENT OBJECT MODEL
// document.body.style.background = "black"

// open and close the menu when click in the icon = hamburguer and x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
} 

// when click in one item of menu, close the menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    } )
}