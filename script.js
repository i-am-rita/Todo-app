const inputField = document.getElementById('inputField')
const inputButton = document.getElementById('inputButton')
const todoContainer = document.getElementById('todoContainer')

inputButton.addEventListener('click', function () {
  // Create a paragraph so when the inputbutton is clicked, there'll be a paragraph
  let paragraph = document.createElement('p')
  paragraph.innerText = inputField.value
  todoContainer.appendChild(paragraph)
  paragraph.classList.add('todos')
  // Make the inputfield empty after adding to the list
  inputField.value = ''
  // Add event listener for the paragraph: 1st click should place a line over the text while 2nd click should delete the text
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through'
  })
  paragraph.addEventListener('dblclick', function () {
    todoContainer.removeChild(paragraph)
  })
})

// Triggering the inputButton when enter is clicked on the keyboard
inputField.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    inputButton.click()
  }
})
