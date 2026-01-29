class BankAccount {

  // ===== STATIC (shared by class) =====
  static bankName = "SBI";
  static interestRate = 5;
  static totalAccounts = 0;

  static calculateInterest(amount) {
    return (amount * this.interestRate) / 100;
  }


  // ===== INSTANCE (per object) =====
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;

    BankAccount.totalAccounts++;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(this.name, "new balance:", this.balance);
  }
}

console.log(BankAccount.bankName);                 //SBI
console.log(BankAccount.interestRate);             //5
console.log(BankAccount.calculateInterest(1000));  //50

let a1 = new BankAccount("Ulka", 1000);
let a2 = new BankAccount("Rahul", 2000);

console.log("Total accounts:", BankAccount.totalAccounts); //Total accounts: 2

a1.deposit(500);
a2.deposit(1000);

// a1.calculateInterest(1000);  //Error

// wrong: Accessing instance inside static
class Test {
  static showStatic() {
    console.log("static this:", this);
  }

  showInstance() {
    console.log("instance this:", this);
  }
}

let t = new Test();

Test.showStatic(); //static this: [class Test]
t.showInstance(); //static this: [class Test]



