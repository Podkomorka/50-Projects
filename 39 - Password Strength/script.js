const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  background.style.filter = `blur(${20 - length * 2}px)`
})


