import Hangman from './hangman'
import getPuzzle from './request'

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