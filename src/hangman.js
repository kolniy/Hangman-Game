class Hangman {
  constructor(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }

  get puzzle(){
       let puzzle = ''
       let count = 0
      this.word.forEach((letter) => {
       if(this.guessedLetters.includes(letter) || letter === ' '){
           puzzle += letter
       } else {
           puzzle += '*'
       }
    });
    return puzzle
  }

   makeGuess(guess){
    if(this.status.toLocaleLowerCase() === 'playing'){
      guess = guess.toLowerCase()
      const isUnique = !this.guessedLetters.includes(guess)
      const isBadGuess = !this.word.includes(guess)
  
      if(isUnique){
          this.guessedLetters.push(guess)
      }
  
      if(isUnique && isBadGuess){
          this.remainingGuesses--
      }
  
      this.calculateGuesses()
    }
   }

   calculateGuesses(){
     
  const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

    if (this.remainingGuesses === 0){
    this.status = 'Failed'
    } else if(finished){
    this.status = 'Finished'
      } else {
    this.status = 'Playing'
    }

}

get statusMessage() {
  if(this.status.toLocaleLowerCase() === 'playing'){
    return `Guesses Left: ${this.remainingGuesses}`
  } else if(this.status.toLocaleLowerCase() === 'failed'){
    return `Nice try! The word was "${this.word.join('')}"`
  } else if(this.status.toLocaleLowerCase() === 'finished'){
      return `Great Work! You guessed the word`
  }
}

}

export { Hangman as default }





// const Hangman = function (word, remainingGuesses){
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.getPuzzle = function(){
//     let puzzle = ''
//     let count = 0
//   this.word.forEach((letter) => {
//        if(this.guessedLetters.includes(letter) || letter === ' '){
//            puzzle += letter
//        } else {
//            puzzle += '*'
//        }
//     });

//     return puzzle
// }

// Hangman.prototype.makeGuess = function(guess){
//   if(this.status.toLocaleLowerCase() === 'playing'){
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if(isUnique){
//         this.guessedLetters.push(guess)
//     }

//     if(isUnique && isBadGuess){
//         this.remainingGuesses--
//     }

//     this.calculateGuesses()
//   }
  
// }
   
// Hangman.prototype.calculateGuesses = function(){

//   const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

//   if (this.remainingGuesses === 0){
//     this.status = 'Failed'
//   } else if(finished){
//     this.status = 'Finished'
//   } else {
//     this.status = 'Playing'
//   }

// }

// Hangman.prototype.displayStatus = function(){
//   if(this.status.toLocaleLowerCase() === 'playing'){
//     return `Guesses Left: ${this.remainingGuesses}`
//   } else if(this.status.toLocaleLowerCase() === 'failed'){
//     return `Nice try! The word was "${this.word.join('')}"`
//   } else if(this.status.toLocaleLowerCase() === 'finished'){
//       return `Great Work! You guessed the word`
//   }
// }

// const lettersUnGuessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })

    // let finished = lettersUnGuessed.length === 0
    
    // let finished = true
    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){

    //     } else {
    //         finished = false
    //     }
    // })