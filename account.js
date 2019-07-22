class Account{
    constructor(firstname, lastname, email, accountNumber, phoneNumber){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.accountNumber = accountNumber
        this.phoneNumber = phoneNumber
        this.balance = 0.0
        this.transactions = []
        this.transactionLimit = 1000
    }

    makeDeposit(amount){
        if(amount < 0){
            return 'Invalid Deposit'
        }

        if(typeof amount !== 'number'){
            return console.log('Invalid Amount')
        }

     const transactionTotalAtDue = (array, key) => {
         return array.reduce(function(r,a){
            return r + a[key]
         }, 0)
     }

     if(transactionTotalAtDue(this.transactions, "transactionAmount") >= this.transactionLimit){
        return console.log('Exceeded Total Set Transaction limit')
    }
        this.balance += amount
        const transaction = {
            transactionType: 'deposit',
            transactionAmount: amount
        }
        this.transactions.push(transaction)
    }

    makeWithDrawal(amount){
        if(amount <= 0){
            return console.log('You cant make a withdrawal less that 0')
        }
        if(amount > this.balance){
            return console.log('Insufficient Fund')
        }
        if(typeof amount !== 'number'){
            return console.log('That is not a valid amount')
        }

        const transactionTotalAtDue = (array, key) => {
            return array.reduce(function(r,a){
               return r + a[key]
            }, 0)
        }
   
        if(transactionTotalAtDue(this.transactions, "transactionAmount") >= this.transactionLimit){
           return console.log('Exceeded Total Set Transaction limit')
       }

        this.balance -= amount

        const transaction = {
            transactionType: 'withdrawal',
            transactionAmount: amount
        }
        this.transactions.push(transaction)
    }

    get AccountDetails(){
        return `Account Name: ${this.firstname} ${this.lastname}, with an account number of ${this.accountNumber} and balance ${this.balance}`
    }

    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }

    get AccountBalance(){
        return `Account balance for ${this.firstname} is ${this.balance}`
    }

    get AccountNumber(){
        return `Account Number for ${this.firstname} is ${this.accountNumber}`
    }

    set AccountBalance(amount){
        this.balance = amount
    }
}

const Account1 = new Account('kolawole', 'olaniyi', 'kolaniyi3@gmail.com', '537637237789238990', '07038954278')

Account1.AccountBalance = 800
Account1.makeDeposit(350)
Account1.makeDeposit(500)
Account1.makeDeposit(50)
Account1.makeDeposit(150)
Account1.makeWithDrawal(40)
console.log(Account1.transactions)
console.log(Account1.AccountDetails)