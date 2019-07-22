// //primitive value : string, number, boolean, null, undefined

// // Object: myObject --> Object.prototype --> null
// // Array: myArray --> Array.prototype --> Object.prototype --> null
// // Function : myFunc --> Function.prototype --> Object.prototype --> null
// // String: myString --> Strng.prototype --> Object.prototype --> null
// // Number: myNumber --> Number.prototype --> Object.prototype --> null
// // Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = {
//     name: 'Pay attention to daniels prophecy'
// }

// // console.log(product.hasOwnProperty('price'))
// // console.log(product)

// // const team = ['kola', 'peter']
// // console.log(team.hasOwnProperty('includes'))

// const ans = true
// console.log(ans.toString())


// hangman use begin's here

const puzzleElement = document.querySelector('#puzzle')
const guessElement = document.querySelector('#guess')
let hangman1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)

    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessElement.textContent = hangman1.statusMessage
    
    const puzzleArray = hangman1.puzzle.split('')

    const generateSpanDom = () => {
        let container = []
        puzzleArray.forEach((letter) => {
            let span = document.createElement('span')
            span.textContent = letter
            container.push(span)
        })
        return container
    }

    generateSpanDom().forEach((span) => {
        puzzleElement.appendChild(span)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    hangman1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })


