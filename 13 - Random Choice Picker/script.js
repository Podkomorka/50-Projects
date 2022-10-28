const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key === 'Enter') {
    // clear textarea after short delay
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

function createTags(input) {
  // .split - make this text into an array with items seperated by the comma
  // .filter - replace that array with an array of items that, if trimmed, are not empty
  // .map - replace that array with an array of the same items after being trimmed
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  // Clear all the shown tags
  tagsElement.innerHTML = ''

  // for each tag in the array
  tags.forEach(tag => {
    // create a span element
    const tagElement = document.createElement('span')
    // give it class of tag
    tagElement.classList.add('tag')
    // set its text to its value
    tagElement.innerText = tag
    // add this tag as a child to the tags container
    tagsElement.appendChild(tagElement)
  })
}

function randomSelect() {
  // setInterval will repeatedly execute a function with a delay until clearInterval is called
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 50)
  }, 50)

  // this will execute after a few seconds
  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 50)
  }, 1000)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}