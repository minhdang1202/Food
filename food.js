window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0);
})

function toggleMenu(){
    const menu = document.querySelector('.menuToggle');
    menu.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    
    
}

var lick = document.querySelector('ul').querySelectorAll('li');
console.log(lick);
const menu = document.querySelector('.menuToggle');

const nav = document.querySelector('.nav');

for (var i = 0; i < lick.length; i++) {
    var menuItem = lick[i];
    menuItem.onclick = function() {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
        
    }
}

