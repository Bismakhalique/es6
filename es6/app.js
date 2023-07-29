/////////for of loop///////
////////question 1/////////

// Create the fruits array with some fruit names
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

// Use a for...of loop to iterate over the array and log each fruit name
for (const fruit of fruits) {
  console.log(fruit);
}

///////question 2//////////

// Create the message string with some text
const message = "Hello, World!";

// Use a for...of loop to iterate over the characters of the string and log each character
for (const character of message) {
  console.log(character);
}

//////////question 3/////////

// Create the person object with properties
const person1 = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property value
  for (const property in person1) {
    if (person1.hasOwnProperty(property)) {
      console.log(`${property}: ${person1[property]}`);
    }
  }

  /////////////question 4///////////

  // Create the person object with properties
const person = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Extract the property values into an array using Object.values()
  const propertyValues = Object.values(person);
  
  // Use a for...of loop to iterate over the property values and log each value
  for (const value of propertyValues) {
    console.log(value);
  }
  
  ////////////question 5/////////

  // Create the colors Set with some color names
const colors = new Set(['Red', 'Green', 'Blue', 'Yellow', 'Orange']);

// Use a for...of loop to iterate over the Set and log each color
for (const color of colors) {
  console.log(color);
}

////////////question 6////////////

// a. Create an empty array
const myArray = [];

// b. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

// c. Log the array into the console
console.log("Array contents:", myArray);

// d. Use the for loop to iterate through the array and output into the console
console.log("Output using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// e. Use the for of loop to output the value into the console from the array
console.log("Output using for...of loop:");
for (const value of myArray) {
  console.log(value);
}

//////////////for in loop//////////////
/////////question 1//////////////

// a. Create a simple object with three items in it
const myObject = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // b. Using the for...in loop, get the properties' names and values from the object
  //    and output them into the console
  console.log("Output using for...in loop:");
  for (const property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      console.log(`${property}: ${myObject[property]}`);
    }
  }
  
  // c. Create an array containing the same three items
  const myAray = ["John Doe", 30, "United States"];
  
  // Using the for loop, output the values from the array into the console
  console.log("Output using for loop:");
  for (let i = 0; i < myAray.length; i++) {
    console.log(myAray[i]);
  }
  
//////////////question 2//////////

// Create the person object with properties
const persn = {
    name: "John Doe",
    age: 30,
    country: "United States",
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property name
  for (const property in persn) {
    if (persn.hasOwnProperty(property)) {
      console.log(property);
    }
  }
  
/////////////question 3////////////

// Create the numbers array with some numeric values
const numbers = [10, 20, 30, 40, 50];

// Use a for loop to iterate over the array and log each index
for (let i = 0; i < numbers.length; i++) {
  console.log(i);
}

////////question 4////////////

// Create the message string with some text
const mesage = "Hello, World!";

// Use a for...in loop to iterate over the characters of the string and log each character
for (const index in mesage) {
  console.log(mesage[index]);
}

////////////question 5///////////

// Create the scores Map with keys as names and values as scores
const scores = new Map([
    ['John', 85],
    ['Alice', 92],
    ['Bob', 78],
  ]);
  
  // Use a for...of loop to iterate over the Map and log each name and score pair
  for (const [name, score] of scores) {
    console.log(`${name}: ${score}`);
  }

  /////////question 6/////////////

  // Create the car object with properties
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
  };
  
  // Use a for...in loop to iterate over the properties of the object and log each property value
  for (const property in car) {
    if (car.hasOwnProperty(property)) {
      console.log(car[property]);
    }
  }

  //////////asyunc and await//////////
////////////question 1///////////////

async function delayedGreeting(name) {
    // Wrap the setTimeout function in a Promise to use async/await
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Hello, ${name}! Welcome to our website.`);
  }
  
  // Call the delayedGreeting function
  delayedGreeting("John");

  /////////question 2//////////

  function fetchData() {
    return new Promise((resolve) => {
      // Simulate an asynchronous API call with a 3-second delay
      setTimeout(() => {
        const data = { message: "Data received successfully!" };
        resolve(data);
      }, 3000); // 3 seconds delay
    });
  }
  
  // Using async/await to call the fetchData function
  async function fetchAndLogData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();

  ///////////question 3///////////

  function fetchUsers() {
    return new Promise((resolve) => {
      // Simulate an asynchronous API call with a 4-second delay
      setTimeout(() => {
        const users = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Alice Johnson" },
          { id: 3, name: "Bob Smith" },
        ];
        resolve(users);
      }, 4000); // 4 seconds delay
    });
  }
  
  // Using async/await to call the fetchUsers function
  async function fetchAndLogUsers() {
    try {
      const users = await fetchUsers();
      console.log(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  // Call the fetchAndLogUsers function
  fetchAndLogUsers();

  ///////////question 4///////////

  async function fetchData(id) {
    try {
      const response = await fetch(`https://bismakhan-api.com/data/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching data for id ${id}. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data for id ${id}: ${error.message}`);
    }
  }
  
  // Example usage
  async function fetchAndLogData() {
    try {
      const id = 123; // Replace with the desired id
      const data = await fetchData(id);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();
  
  //////////question 5////////////////

  function fetchData(id) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call with a 5-second delay
      setTimeout(() => {
        const data = { id, message: "Fetched data successfully!" };
        resolve(data);
      }, 5000); // 5 seconds delay
    });
  }
  
  // Using async/await to call the fetchData function
  async function fetchAndLogData() {
    try {
      const id = 123; // Replace with the desired id
      const data = await fetchData(id);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the fetchAndLogData function
  fetchAndLogData();
  
  ////////////question 6///////////

  // a. Create a global value for the counter
let globalCounter = 0;

// b. Create a function that returns a Promise with a setTimeout
function timeout(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, value });
    }, 1000); // 1 second delay
  });
}

// d. Create an asynchronous function to output counter and value into the console
async function outputCounterAndValue(value) {
  const result = await timeout(value);
  console.log(`Global Counter: ${result.counter}, Function Argument: ${result.value}`);
}

// e. Create a loop to iterate 10 times, invoking the async function
async function main() {
  for (let i = 1; i <= 10; i++) {
    await outputCounterAndValue(i);
  }
}

// Call the main function
main();

//////////// closure ///////////
////////question 1//////////////

function counter() {
    let count = 0; // Counter variable is defined within the outer function
  
    // Returned function is a closure and has access to the outer function's scope
    return function () {
      count++;
      console.log(count);
    };
  }
  
  // Create two separate counter functions with their own counter variables
  const incrementCounter1 = counter();
  const incrementCounter2 = counter();
  
  // Increment and log the counter values
  incrementCounter1(); // Output: 1
  incrementCounter1(); // Output: 2
  incrementCounter1(); // Output: 3
  
  incrementCounter2(); // Output: 1
  incrementCounter2(); // Output: 2

  ///////////////question 2/////////

  function createMultiplier(factor) {
    return function (number) {
      return factor * number;
    };
  }
  
  // Create a multiplier function with a factor of 5
  const multiplyBy5 = createMultiplier(5);
  
  // Use the multiplier function to multiply a number
  console.log(multiplyBy5(10)); // Output: 50 (5 * 10)
  console.log(multiplyBy5(7));  // Output: 35 (5 * 7)

  /////////question 3//////////////

  function secretMessage(secret) {
    return function (message) {
      console.log(`Secret Message: ${secret} - ${message}`);
    };
  }
  
  // Create a secretMessage function with a secret
  const revealSecret = secretMessage("I am BISMA!");
  
  // Use the revealSecret function to log the secret message along with a provided message
  revealSecret("Hello, PRETTY!"); // Output: Secret Message: I am BISMA! - Hello, PRETTY!
  revealSecret("I will protect you."); // Output: Secret Message: I am Batman! - I will protect you.

  ////////////question 4////////////

  function calculate(num1, num2) {
    return {
      add: function () {
        return num1 + num2;
      },
      multiply: function () {
        return num1 * num2;
      },
    };
  }
  
  // Create a calculator for numbers 5 and 3
  const calculator = calculate(5, 3);
  
  // Use the calculator to perform addition and multiplication
  console.log(calculator.add());      // Output: 8 (5 + 3)
  console.log(calculator.multiply()); // Output: 15 (5 * 3)
  
