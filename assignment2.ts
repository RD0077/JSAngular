class BankAccount{
    accontNumber:number
    balance:number
    constructor(accontNumber:number,balance:number){
        this.accontNumber=accontNumber
        this.balance=balance
    }
    getAccountDetails():string{
        return ("Account Number:"+this.accontNumber+" Balance:"+this.balance)
    }
    depositeFund(amount:number):string{
        this.balance+=amount
        return ("Account Number:"+this.accontNumber+" Balance:"+this.balance)
    }
    withdrowFund(amount:number):string{
        this.balance-=amount
        return ("Account Number:"+this.accontNumber+" Balance:"+this.balance)
    }
}
console.log("BankAccount")
let account1=new BankAccount(101,5000)
console.log(account1.getAccountDetails())
console.log(account1.depositeFund(1000))
console.log(account1.withdrowFund(1000))

class SavingAccount extends BankAccount{
    intrestRate:number=12
    constructor(acaccontNumber:number,balance:number){
        super(acaccontNumber,balance)
    }
    getAccountDetails():string{
        return ("Account Number:"+this.accontNumber+" Balance:"+this.balance+" IntrestRate:"+this.intrestRate+"%")
    }
}

class CurrentAccount extends BankAccount{
    constructor(acaccontNumber:number,balance:number){
        super(acaccontNumber,balance)
    }
    getAccountDetails():string{
        return ("Current Account Number:"+this.accontNumber+" Balance:"+this.balance)
    }
}

let account2=new CurrentAccount(102,6000)
console.log("current Account")
console.log(account2.getAccountDetails())
console.log(account2.depositeFund(1000))
console.log(account2.withdrowFund(1000))

let account3=new SavingAccount(103,10000)
console.log("Saving Account")
console.log(account3.getAccountDetails())
console.log(account3.depositeFund(1000))
console.log(account3.withdrowFund(1000))




