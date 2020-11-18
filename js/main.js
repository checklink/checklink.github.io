const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypg = document.getElementById(bodyId),
        headerpg = document.getElementById(headerId)
  if(toggle && nav && bodypg) {
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
      bodypg.classList.toggle('bodypg')
      headerpg.classList.toggle('bodypg')
    })
  }
}

showNavbar('header-toggle','nav-bar', 'bodypg', 'header')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  if(linkColor){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
  }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))