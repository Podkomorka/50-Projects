const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
// when using arrow functions, if your function is one line you dont need curly braces after arrow