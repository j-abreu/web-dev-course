class Release {
    constructor (name = 'shampoo', value = 0) {
        this.name = name
        this.value = value
    }
}

class FinancialCycle {
    constructor (month, year) {
        this.month = month
        this.year = year
        this.releases = []
        this.balance = 0
    }

    addRelease(...releases) {
        releases.forEach(r => {
            this.releases.push(r)
            this.balance += r.value})
    }

    summary() {
        console.log(`Financial cycle in ${this.month} ${this.year}`)
        this.releases.forEach(r => {
            console.log(`${r.name}: ${r.value}`)
        })
        console.log(`total balance: ${this.balance}`)
    }
}

const salary = new Release('salary', 49000)
const lightBill = new Release('light bills', -400)

const expenses = new FinancialCycle('august', 2020)
expenses.addRelease(salary, lightBill)
expenses.summary()
