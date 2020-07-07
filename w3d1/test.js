
describe("get account number", function(){
    let acc = new Account(54234);
    it("retrieves the account number of the account", function(){
        assert.equal(54234, acc.getNumber());
    });
});

describe("get balance", function(){
    let acc = new Account(234234);
    it("retrieves the current balance", function(){
        assert.equal(0.0, acc.getBalance());
    });
});

describe("deposit", function(){
    let acc = new Account(1231);
    acc.deposit(200);
    it("when deposit is called with some amount, that amount is added to the current balance", function(){
        assert.equal(200.0, acc.getBalance());
    });
});

describe("withdraw", function(){
    let acc = new Account(23432);
    acc.deposit(200);
    acc.withdraw(100);
    it("when withdraw is called with some amount, it decreases that amount from the current balance.", function(){
        assert.equal(100, acc.getBalance());
    });

    it("throws error when try to withdraw negative amount", function(){
        assert.throw(()=> {acc.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });
});

describe("toString", function(){
    let acc = new Account(3434534);
    acc.deposit(200);
    it("returns the string representation of the account", function(){
        assert.equal("Account 3434534: balance 200", acc.toString());
    });
});


describe("Savings Account tests", function(){
    let acc = new SavingsAccount(1234, 25);
    acc.deposit(100);
    acc.addInterest();

    it("adds the interest amount to the current balance.", function(){
       assert.equal(125, acc.getBalance());
    });

    it("returns the toString representation of savings account ", function(){
        assert.equal("Account 1234: balance 125, Interest 25", acc.toString());
    });
});

describe("Checking Account tests", function(){
    let acc = new CheckingAccount(1234, 100);
    acc.deposit(200);

    it("throws eror when trying to withdraw amount that is greater than current balance plus overdraft.", function(){
        assert.throw(()=>{acc.withdraw(1000)}, Error, "Insufficient funds.");
    });

    acc.withdraw(300);
    it("can withdraw amount that is less than current balance + overdraft", function(){
        assert.equal(-100, acc.getBalance());
    });
});

describe("Bank Tests", function(){
    it("adds a new Account to the accounts array", function(){
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
        assert.equal(1, bank.getAccounts()[0].getNumber()); // account number starts from 1

        bank.addSavingsAccount(25);
        assert.equal(2, bank.getAccounts().length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.getAccounts().length);
    });

    it("deletes an account from account array when called closeAccount()", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        assert.equal(3, bank.getAccounts().length);
        assert.equal(2, bank.closeAccount(bank.getAccounts()[0].getNumber()));
        assert.equal(2, bank.getAccounts().length);
    });

    it("creates an account report of all accounts in new line. ", function(){
        let bank1 = new Bank();
        bank1.addAccount();
        bank1.addCheckingAccount(100);
        bank1.addSavingsAccount(200);

        assert.equal("Account 7: balance 0\nAccount 8: balance 0, Overdraft 100\nAccount 9: balance 0, Interest 200\n", bank1.accountReport());
    });
});

describe("End of month test", function(){
    it("returns expected output when calling endOfMonth() on each account", function(){
       let bank2 = new Bank();
       bank2.addAccount();
       bank2.addSavingsAccount(25);
       bank2.getAccounts()[1].deposit(100);

       bank2.addCheckingAccount(100);
       bank2.getAccounts()[2].withdraw(50);

       assert.equal("\nInterest added Savings Account: 11 balance: 125 interest: 25\nWarning, low balance CheckinAccount 12: balance: -50 overdraft limit: 100\n", bank2.endOfMonth());
    });
});




