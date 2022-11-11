const imgs = document.getElementById('imgs')
const prevBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')

const imgsLength = imgs.children.length
var imgsPosition = 1

nextBtn.addEventListener('click', () => {
  ++imgsPosition

  if(imgsPosition > imgsLength) {
    imgsPosition = 1
  }

  moveImgs()
})

prevBtn.addEventListener('click', () => {
  --imgsPosition

  if(imgsPosition < 1) {
    imgsPosition = imgsLength
  }

  moveImgs()
})

function moveImgs() {
  imgs.style.transform = `translateX(${-(500 * (imgsPosition - 1))}px)`
}

function moveImgsAuto() {
  ++imgsPosition

  if(imgsPosition > imgsLength) {
    imgsPosition = 1
  }
  
  moveImgs()
}

setInterval(moveImgsAuto, 3000)