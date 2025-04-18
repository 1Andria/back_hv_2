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
//     const index = this.#ListOfBooks.findIndex((el) => el.BookID === BookId);
//     if (index !== -1) {
//       const deletedBook = this.#ListOfBooks.splice(index, 1)[0];
//       console.log(deletedBook, "Deleted ");
//     }
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
// user1.removeBook(1);
// user1.removeBook(3);
// user1.listOfBooks();

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

// class Employee {
//   constructor(hours, salaryPerHour) {
//     this.hours = hours;
//     this.salaryPerHour = salaryPerHour;
//   }
//   calculateSalary() {
//     const salary = this.hours * this.salaryPerHour;
//     console.log(`Your salary is ${salary}$ per month `);
//   }
// }

// const user1 = new Employee(10, 15);
// user1.calculateSalary();

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()

// class ShoppingCart {
//   #ShoppinItems = [];
//   #itemId = 0;
//   #TotalPrice = 0;
//   addItem(item, price, amount) {
//     const items = {
//       item,
//       price,
//       amount,
//       itemID: this.#itemId,
//     };
//     this.#itemId++;
//     this.#ShoppinItems.push(items);
//   }
//   deleteItem(itemId) {
//     const index = this.#ShoppinItems.findIndex((el) => el.itemID === itemId);
//     if (index !== -1) {
//       const deleted = this.#ShoppinItems.splice(index, 1);
//       console.log(deleted, "deleted");
//     }
//   }
//   updateItem(itemId, item, price, amount) {
//     const index = this.#ShoppinItems.findIndex((el) => el.itemID === itemId);
//     if (index !== -1) {
//       this.#ShoppinItems[index].item = item;
//       this.#ShoppinItems[index].price = price;
//       this.#ShoppinItems[index].amount = amount;
//     }
//   }
//   calculateTotal() {
//     // this.#TotalPrice = 0;
//     // this.#ShoppinItems.map((el) => {
//     //   this.#TotalPrice += el.price * el.amount;
//     // });
//     this.#TotalPrice = this.#ShoppinItems.reduce((tot, cur) => {
//       return tot + cur.price * cur.amount;
//     }, 0);
//     console.log(this.#TotalPrice);
//   }
//   showItems() {
//     console.log(this.#ShoppinItems);
//   }
// }

// const user1 = new ShoppingCart();
// user1.addItem("puri", 4, 10);
// user1.addItem("puri", 4, 10);
// user1.updateItem(0, "karaqi", 3, 3);
// user1.deleteItem(0);
// user1.calculateTotal();
// user1.showItems();

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010 // use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
// ]

// class CarFactory {
//   #CarInfo = [];
//   #CarID = 0;
//   addCar(model, price) {
//     const AboutCar = {
//       year: Math.floor(Math.random() * (2025 - 2010)) + 2010,
//       model,
//       price,
//       CarID: this.#CarID,
//     };
//     this.#CarID++;
//     this.#CarInfo.push(AboutCar);
//   }
//   deleteCar(CarID) {
//     const index = this.#CarInfo.findIndex((el) => el.CarID === CarID);
//     if (index != -1) {
//       const deleted = this.#CarInfo.splice(index, 1);
//       console.log(deleted, "deleted");
//     }
//   }

//   updateCars(CarID, model, price) {
//     const index = this.#CarInfo.findIndex((el) => el.CarID === CarID);
//     if (index != -1) {
//       this.#CarInfo[index].model = model;
//       this.#CarInfo[index].price = price;
//     }
//   }

//   getAllCars() {
//     console.log(this.#CarInfo);
//   }
// }
// const car1 = new CarFactory();
// car1.addCar("some", 123123);
// car1.addCar("lme", 2222223);
// car1.deleteCar(1);
// car1.updateCars(0, "asdasd", 123123);
// car1.getAllCars();

// 6) Create a class rectangle that receives width and height and add this methods getArea(), getPerimeter(), isSquare()

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   getArea() {
//     const area = (this.width * this.height) / 2;
//     console.log(`Are is ${area}cm`);
//   }
//   getPerimeter() {
//     const perimeter = this.width + this.height;
//     console.log(`Perimeter is ${perimeter}cm`);
//   }
//   isSquare(shape) {
//     if (!shape || shape != "square") {
//       console.log(false);
//     } else {
//       console.log(true);
//     }
//   }
// }

// const user1 = new Rectangle(10, 10);
// user1.getArea();
// user1.getPerimeter();
// user1.isSquare();

// 7) Create a Class Inventory that holds a list of items, Each item has name, stock, price Methods: addItem(), updateStock(name, quantity), checkAvailability(name), calculateValue()

// class Inventory {
//   #items = [];
//   #itemCount = 0;

//   addItem(name, stock) {
//     const Info = {
//       name,
//       stock,
//       price: Math.floor(Math.random() * (5000 - 2000)) + 2000,
//       itemID: this.#itemCount,
//     };
//     this.#itemCount++;
//     this.#items.push(Info);
//   }

//   updateStock(itemID, name, quantity) {
//     const index = this.#items.findIndex((el) => el.itemID === itemID);
//     if (index != -1) {
//       this.#items[index].name = name;
//       this.#items[index].stock = quantity;
//     }
//   }
//   checkAvailability(name) {
//     const index = this.#items.findIndex((el) => el.name === name);
//     if (index != -1 && this.#items[index].stock > 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }

//   show() {
//     console.log(this.#items);
//   }
// }

// const user1 = new Inventory();

// user1.addItem("laptop", "0");
// user1.addItem("tablet", "300");
// user1.addItem("phone", "200");
// user1.updateStock(2, "tv", "1000");
// user1.checkAvailability("laptop");
// user1.show();
