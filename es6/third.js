/////  MAPS ///////

/// QUESTION 1//////

const squareMap = (numbers) => {
    // Using the Map data structure to store the mapping of numbers to their squares
    const result = new Map();
  
    // Iterating through the array of numbers and calculating the square for each number
    for (const number of numbers) {
      const square = number * number;
      // Storing the mapping of the number to its square in the result map
      result.set(number, square);
    }
  
    return result;
  };
  
  // Test the function
  const numbersArray = [1, 2, 3, 4, 5];
  const resultMap1 = squareMap(numbersArray);
  console.log(resultMap1); // Output: Map { 1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25 }
  
/// QUESTION 2//////

const mapNamesToAges = (people) => {
    // Using the Map data structure to store the mapping of names to ages
    const result = new Map();
  
    // Iterating through the array of objects and extracting name-age pairs
    for (const person of people) {
      const { name, age } = person;
      // Storing the mapping of the name to its corresponding age in the result map
      result.set(name, age);
    }
  
    return result;
  };
  
  // Test the function
  const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 27 },
  ];
  
  const resultMap = mapNamesToAges(peopleArray);
  console.log(resultMap);
  // Output: Map { 'Alice' => 25, 'Bob' => 30, 'Charlie' => 22, 'David' => 27 }


  /// QUESTION 3//////
  
  const hasKeyInMap = (map, key) => {
    // Using the Map's built-in 'has' method to check if the key exists in the map
    return map.has(key);
  };
  
  // Test the function
  const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
  
  console.log(hasKeyInMap(myMap, 'b')); // Output: true
  console.log(hasKeyInMap(myMap, 'd')); // Output: false
  

/// QUESTION 4//////

const filterMapByCallback = (map, callback) => {
    // Using the Map and Object.fromEntries to create a new map with filtered key-value pairs
    const filteredEntries = [...map.entries()].filter(([key, value]) => callback(key, value));
    const filteredMap = new Map(filteredEntries);
    return filteredMap;
  };
  
  // Test the function
  const myMap1 = new Map([
    ['apple', 5],
    ['banana', 10],
    ['orange', 8],
    ['grapes', 15],
  ]);
  
  const filteredMap = filterMapByCallback(myMap1, (key, value) => value > 8);
  console.log(filteredMap);
  // Output: Map { 'banana' => 10, 'grapes' => 15 }
  

/// QUESTION 5//////

const mergeMaps = (map1, map2) => {
    // Creating a new map to hold the merged key-value pairs
    const mergedMap = new Map();
  
    // Adding key-value pairs from the first map to the merged map
    for (const [key, value] of map1) {
      mergedMap.set(key, value);
    }
  
    // Adding or overwriting key-value pairs from the second map to the merged map
    for (const [key, value] of map2) {
      mergedMap.set(key, value);
    }
  
    return mergedMap;
  };
  
  // Test the function
  const map1 = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  
  const map2 = new Map([
    ['b', 3],
    ['c', 4],
  ]);
  
  const mergedMap = mergeMaps(map1, map2);
  console.log(mergedMap);
  // Output: Map { 'a' => 1, 'b' => 3, 'c' => 4 }
  

  ////  CLASSES //////

  /// QUESTION 2 //////


// Step a: Create a class for Person including the constructor for firstname and lastname.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  // Step b: Create a variable and assign a value of the new Person object using your friend's first and last names.
  const friend1 = new Person('John', 'Doe');
  
  // Step c: Now add a second variable with another friend's name using their first name and last name.
  const friend2 = new Person('Jane', 'Smith');
  
  // Step d: Output both friends into the console with a greeting of hello.
  console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
  console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
  
/// QUESTION 3 //////

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     introduction() {
//       return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
//     }
//   }
  
//   // Test the class
//   const person1 = new Person('Alice', 25);
//   console.log(person1.introduction()); // Output: Hi, my name is Alice, and I am 25 years old.
  
//   const person2 = new Person('Bob', 30);
//   console.log(person2.introduction()); // Output: Hi, my name is Bob, and I am 30 years old.
  

  /// QUESTION 4 //////

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle
    getArea() {
      return this.width * this.height;
    }
  
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Test the class
  const rectangle1 = new Rectangle(5, 10);
  console.log('Area:', rectangle1.getArea()); // Output: Area: 50
  console.log('Perimeter:', rectangle1.getPerimeter()); // Output: Perimeter: 30
  
  const rectangle2 = new Rectangle(7, 3);
  console.log('Area:', rectangle2.getArea()); // Output: Area: 21
  console.log('Perimeter:', rectangle2.getPerimeter()); // Output: Perimeter: 20
  
/// QUESTION 6 //////


class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate and return the diameter of the circle
    getDiameter() {
      return 2 * this.radius;
    }
  
    // Method to calculate and return the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to calculate and return the area of the circle
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Test the class
  const circle1 = new Circle(5);
  console.log('Diameter:', circle1.getDiameter()); // Output: Diameter: 10
  console.log('Circumference:', circle1.getCircumference()); // Output: Circumference: 31.41592653589793
  console.log('Area:', circle1.getArea()); // Output: Area: 78.53981633974483
  
  const circle2 = new Circle(7);
  console.log('Diameter:', circle2.getDiameter()); // Output: Diameter: 14
  console.log('Circumference:', circle2.getCircumference()); // Output: Circumference: 43.982297150257104
  console.log('Area:', circle2.getArea()); // Output: Area: 153.93804002589985
  

/// QUESTION 6//////

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, course) {
      // Call the parent class's constructor using super
      super(name, age);
      this.course = course;
    }
  
    // Override the introduction method of the parent class
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old. I am a student studying ${this.course}.`;
    }
  }
  
  // Test the classes
  const student1 = new Student('Alice', 20, 'Computer Science');
  console.log(student1.introduction());
  // Output: Hi, my name is Alice, and I am 20 years old. I am a student studying Computer Science.
  
  const student2 = new Student('Bob', 22, 'Physics');
  console.log(student2.introduction());
  // Output: Hi, my name is Bob, and I am 22 years old. I am a student studying Physics.
  



/// QUESTION 7 //////

class Rectangle1 {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle//11
    getArea() {
      return this.width * this.height;
    }
  
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      // Call the parent class's constructor with the same side value for width and height
      super(side, side);
    }
  
    // Override the getArea method of the parent class to use the side instead of width and height
    getArea() {
      return this.width ** 2;
    }
  
    // Override the getPerimeter method of the parent class to use the side instead of width and height
    getPerimeter() {
      return 4 * this.width;
    }
  }
  
  // Test the classes
  const square1 = new Square(5);
  console.log('Area:', square1.getArea()); // Output: Area: 25
  console.log('Perimeter:', square1.getPerimeter()); // Output: Perimeter: 20
  
  const square2 = new Square(7);
  console.log('Area:', square2.getArea()); // Output: Area: 49
  console.log('Perimeter:', square2.getPerimeter()); // Output: Perimeter: 28
  

/////HOISTING///////


///// QUESTION 1///////
function printVariable() {
    console.log(myVar); // Output: undefined
    var myVar = 5;
    console.log(myVar); // Output: 5
  }
  
  printVariable();
  


///// QUESTION 2///////

// function printValue() {
//     let myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  




///// QUESTION 3///////

// function printValue() {
//     const myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  



///// QUESTION 4///////

// function printValue() {
//     console.log(undeclaredVar); // This will result in an error
//   }
  
//   printValue();
  

  //// QUESTION 5///////

// Function declaration
function foo() {
    console.log("Hello from foo!");
  }
  
  function callFoo() {
    foo(); // Calling the function declared below
  }
  
  callFoo(); // Output will be "Hello from foo!"
  


  ///// THIS KEY WORD /////


//// QUESTION 1///////

const person = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output will be "Hello, my name is John."
  


//// QUESTION 2///////

function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of ${this.brand} car: ${this.speed} km/h`);
    };
  }
  
  // Creating an instance of Car
  const myCar = new Car("Toyota");
  
  // Using the methods
  myCar.accelerate(30);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 30 km/h"
  
  myCar.accelerate(20);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 50 km/h"
  


//// QUESTION 3///////

const calculator = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 4///////
const calculator1 = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 5///////

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  
    printInfo: function() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Number of Pages: ${this.pages}`);
    }
  };
  
  // Using the printInfo method
  book.printInfo();
  




//// QUESTION 6///////


const counter = {
    count: 0,
  
    increment: function() {
      this.count += 1;
    },
  
    reset: function() {
      this.count = 0;
    }
  };
  
  // Using the methods
  counter.increment();
  console.log(counter.count); // Output: 1
  
  counter.increment();
  console.log(counter.count); // Output: 2
  
  counter.reset();
  console.log(counter.count); // Output: 0
  


//// QUESTION 7///////

const product = {
    name: "Laptop",
    price: 1000,
    discount: 0.1, // 10% discount
  
    calculateDiscountedPrice: function() {
      return this.price - (this.price * this.discount);
    }
  };
  
  // Using the calculateDiscountedPrice method
  const discountedPrice = product.calculateDiscountedPrice();
  console.log(discountedPrice); // Output: 900
  


//// QUESTION 8///////

const game = {
    playerName: "John",
    score: 0,
  
    play() {
      // Your game logic here
      console.log(`${this.playerName} is playing the game.`);
      this.score += 10;
      console.log(`Score: ${this.score}`);
    }
  };
  
  game.play(); // Output: "John is playing the game." and "Score: 10"