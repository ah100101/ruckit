function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export default {
  getRandomMovement: function (movements) {
    return new Promise((resolve, reject) => {
      if (!movements || movements.length <= 0) {
        reject(new Error('Invalid Movements Provided'))
      }

      let randomIndex = getRandomInt(0, movements.length - 1)
      let randomMovement = movements[randomIndex]

      if (!randomMovement || !randomMovement.title) {
        reject(new Error('Invalid Movement Selected'))
      }

      resolve(randomMovement)
    })
  },
  getRandomMovements: function (movements, take) {
    return new Promise((resolve, reject) => {
      if (!movements || movements.length <= 0) {
        reject(new Error('Invalid Movements Provided'))
      }

      let shuffledMovements = shuffle(movements)

      resolve(shuffledMovements.slice(0, take))
    })
  }
}
