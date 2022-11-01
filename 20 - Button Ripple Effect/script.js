const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('mousedown', (e) =>{
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const yInside = y - buttonTop
    const xInside = x - buttonLeft

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    e.target.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})