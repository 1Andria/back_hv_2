// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   madeBy() {
//     console.log(`this car is ${this.make}`);
//   }
//   model() {
//     console.log(`model is ${this.model}`);
//   }
//   year() {
//     console.log(`in ${this.year}`);
//   }
// }

// class ElectricCar extends Car {
//   constructor(make, model, year, BatteryLevel) {
//     super(make, model, year);
//     this.BatteryLevel = BatteryLevel;
//   }

//   BatteryInfo(BatteryInfo) {
//     console.log(`Battery leve is ${BatteryInfo}`);
//   }

//   CarInfo() {
//     console.log(
//       `${this.model} was manufactured in ${this.year} by ${this.make} and Battery level is ${this.BatteryLevel}`
//     );
//   }
// }

// const car1 = new ElectricCar("Mercedes", "cls", "300", "90");
// car1.madeBy();
// car1.CarInfo();

// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks(). listBooks should have array of objects with following properties: [
// {
// author: 'George Orwell',
// book: 'Nineteen Eighty-Four',
// year: 1948,
// }
// ]

// const arr = ["some", "sm", "ss"];
// const some = "some";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === some) {
//     arr.splice(some);
//   }
// }

// console.log(arr);

// class Library {
//   #ListOfBooks = [];
//   #BookCount = 0;

//   addBook(author, book, year) {
//     const BookData = {
//       author,
//       book,
//       year,
//       BookID: this.#BookCount,
//     };
//     this.#BookCount++;
//     this.#ListOfBooks.push(BookData);
//   }

//   removeBook(BookId) {
//     console.log(this.#ListOfBooks);

//     this.#ListOfBooks.forEach((el) => {
//       if (el.BookID === BookId) {
//         console.log(el);

//         this.#ListOfBooks.splice(el);
//       }
//     });
//   }

//   listOfBooks() {
//     console.log(this.#ListOfBooks);
//   }
// }

// const user1 = new Library();
// user1.addBook("michale", "something", 1984);
// user1.addBook("someone", "something", 1984);
// user1.addBook("someoneee", "something", 1984);
// user1.addBook("someoneeeee", "something", 1984);
// user1.removeBook(2);
// user1.listOfBooks();

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.
// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()
// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010 // use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
// ]

// 6) Create a class rectangle that receives width and height and add this methods getArea(), getPerimeter(), isSquare()

// 7) Create a Class Inventory that holds a list of items, Each item has name, stock, price Methods: addItem(), updateStock(name, quantity), checkAvailability(name), calculateValue()
