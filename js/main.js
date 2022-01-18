// Select DOM Items
var menuBtn = document.querySelector('.menu-btn')
var menu = document.querySelector('.menu')
var branding = document.querySelector('.menu-branding')
var menuNav = document.querySelector('.menu-nav')
var navItems = document.querySelectorAll('.nav-item')

// Set Initial state of menu

var showMenu = false

menuBtn.addEventListener('click',toggleMenu)

function toggleMenu(){
   if (!showMenu) {
       menuBtn.classList.add('close')
       menu.classList.add('show')
       menuNav.classList.add('show')
       branding.classList.add('show')

       navItems.forEach(item => item.classList.add('show'))
    //    Set menu state
    showMenu = true
   } else{
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        branding.classList.remove('show')

        navItems.forEach(item => item.classList.remove('show'))
        showMenu = false
   }
}