var receiveButton = document.querySelector('.receive-button')
var bellImage = document.querySelector('.bell')
var messageBox = document.querySelector('.message-box')
var affirmButton = document.getElementById('affirmation')
var mantraButton = document.getElementById('mantra')
var addFavButton = document.querySelector('.favorite-button')
var showFavButton = document.querySelector('.show-favorites-button')
var headerQuestion = document.querySelector('.question')
var form = document.querySelector('form')
var favPage = document.querySelector('.fav-page')
var homeButton = document.querySelector('.home-button')


// console.log(favDisplay)
console.log(form)
receiveButton.addEventListener('click', showMessage)
addFavButton.addEventListener('click', addFavorite)
showFavButton.addEventListener('click', showFavorites)
homeButton.addEventListener('click', goHome)

showFavButton.style.opacity = '50%'
// favPage.classList.add('hidden')

var favorites = []
var currentMessage

var h1 = document.createElement('h1')
h1.classList.add('message')

function showMessage() {
  event.preventDefault()

  if(affirmButton.checked === true) {
    currentMessage = affirmArray[getRandomIndex(affirmArray)]

  }
  else if(mantraButton.checked === true) {
    currentMessage = mantraArray[getRandomIndex(mantraArray)]

  }
  else {
    return
  }
  h1.innerText = currentMessage
  bellImage.remove()
  h1.remove()
  messageBox.appendChild(h1)
  addFavButton.classList.remove('hidden')
  showFavButton.classList.remove('hidden')

}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function addFavorite() {
  if(favorites.includes(currentMessage) != true) {
    favorites.push(currentMessage)
  }
  console.log(favorites)
  showFavButton.style.opacity = '100%'

}

function showFavorites() {
  if(favorites.length === 0) {
    return
  }

  headerQuestion.classList.add('hidden')
  form.classList.add('hidden')
  messageBox.classList.add('hidden')
  favPage.classList.remove('hidden')
  addFavButton.classList.add('hidden')
  showFavButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  // h1.remove()
  for(i = 0; i < favorites.length; i++) {
    var fav = document.createElement('button')
    fav.classList.add('message-list')
    // fav.classList.add('message')
    fav.innerText = `${favorites[i]}`
    fav.id = `${i}`
    favPage.appendChild(fav)
    fav.addEventListener('dblclick', removeFavorite)
    fav.addEventListener('dblclick',this.remove)

  }
}

function removeFavorite() {
  console.log(this.id)
  favorites.splice(this.id, 1)
  if(favorites.length === 0) {
    showFavButton.style.opacity = '50%'
  }
}


function goHome() {
  headerQuestion.classList.remove('hidden')
  form.classList.remove('hidden')
  messageBox.classList.remove('hidden')
  favPage.classList.add('hidden')
  addFavButton.classList.remove('hidden')
  showFavButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
}





var affirmArray = ["I forgive myself and set myself free.", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."]

var mantraArray = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."]
