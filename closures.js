const createCounter = () => {
    let count = 0

    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const count = createCounter()
count.increment()
count.decrement()
count.decrement()
console.log(count.get())

// Adder
const add = (a) => {
    return (b) => a+b
}

const add10 = add(10)
console.log(add10(-2))
console.log(add10(20))

const createTipper = (tipPercent) => {
    return (amount) => {
        return tipPercent * amount
    }
}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))