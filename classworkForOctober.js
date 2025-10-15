// Lab 1

//Create a class called Car with properties make, model, and year.
// Add a method getDescription() that returns a string like:
//"2021 Toyota Camry".

class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    getDescription(){
        return this.year+" "+this.make+" "+this.model;
    }
}

const car1 = new Car("Toyota", "Camry", 2021);
console.log(car1.getDescription()); // "2021 Toyota Camry"


// Lab 2

//Create a class BankAccount with properties owner and balance.
//Add the following methods:
//deposit(amount) → increases the balance.
//withdraw(amount) → decreases the balance (only if funds are available).
//getBalance() → returns "Balance: $___".

class BankAccount{
    constructor(owner,balence){
        this.owner=owner;
        this.balence=balence;
    }
    deposit(amount){
        this.balence+=amount;
    }
    withdraw(amount){
        if(this.balence>=amount){
            this.balence-=amount;
        }else{
            console.log("Error");
        }
    }
    getBalance(){
        return "Balance: $" + this.balence;
    }
}

const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance()); // "Balance: $120"

// Lab 3

//Create a class Person with properties name and age, and a method introduce() that says "Hi, I’m [name], and I’m [age] years old."
//Then create a subclass Student that adds a grade property and overrides introduce() to include the grade.

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return "Hi, I'm " + this.name + ", and I'm " + this.age + " years old.";
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
    introduce(){
        return super.introduce() + " I'm in grade " + this.grade + ".";
    }
}

const s1 = new Student("Maya", 17, "11th");
console.log(s1.introduce()); // "Hi, I’m Maya, I’m 17 years old, and I’m in 11th grade."

// Lab 4

//Create a class Book with properties title, author, and pages.
//Then create an array of 3 Book objects and write a function listBooks() that loops through the array and logs each book’s title and author.

class Book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
}
const library = [
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("Dune", "Frank Herbert", 412)
  ];
  
function listBooks(books){
    for(let i = 0; i < books.length; i++ ){
        console.log(books[i].title + " by " + books[i].author);
    }
    };

  listBooks(library);

// Output:
// "1984 by George Orwell"
// "The Hobbit by J.R.R. Tolkien"
// "Dune by Frank Herbert"

// Lab 5

//Create a class User with:
//a private field #password,
//a public username property, and
//methods setPassword(p) and checkPassword(p) that validate and return a success or failure message.

class User{
    #password;
    constructor(username){
        this.username=username;
        this.#password="";
    }
    setPassword(pass){
        this.#password=pass;
    }
    checkPassword(pass){
        if(this.#password===pass){
            return "Access granted";
        }else{
            return "Access denied";
        }
    }
}

const u1 = new User("azahar");
u1.setPassword("abc123");
console.log(u1.checkPassword("abc123")); // "Access granted"
console.log(u1.checkPassword("wrong")); // "Access denied"

console.log("stop sign... what stop sign");