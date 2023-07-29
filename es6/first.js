//LET, VAR & CONST:
//QUESTION 1
const PI = 3.14159;
console.log(PI); // Output: 3.14159
//QUESTION 2
function sumOfSquares(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i];
      sum += square;
    }
    return sum;
  }
  const numbersArray = [1, 2, 3, 4];
  console.log(sumOfSquares(numbersArray)); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2 = 30)\
//QUESTION 3
const stringsArray = ["apple", "banana", "cherry"];
for (let i = 0; i < stringsArray.length; i++) {
  let firstLetter = stringsArray[i][0];
  console.log(firstLetter);
}// Output: "a", "b", "c"
//QUESTION 4
const ASTERISK = '*';
function generateAsterisks(n) {
  return ASTERISK.repeat(n);
}
console.log(generateAsterisks(5)); // Output: "***"
//QUESTION 5
function generateGreeting(perssonData) {
    const greetingMessage = `Hello, my name is ${perssonData.name} and I am ${perssonData.age} years old.`;
    return greetingMessage;
  }

  const perssonObject = { name: "Bisma", age: 20 };
  console.log(generateGreeting(perssonObject)); // Output: "Hello, my name is Bisma and I am 20 years old."
//QUESTION 6
function findMaxValue(numbers) {
    let max = Math.max(...numbers);
    return max;
  }
  const numbersArray2 = [10, 5, 7, 25, 15];
  console.log(findMaxValue(numbersArray2)); // Output: 25
  
  //TEMPLATE STRINGS:
  //Question 1
  function greetPersonn(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  const name = "Bisma";
  const age = 20;
  console.log(greetPersonn(name, age)); // Output: "My name is Bisma and I am 20 years old."
  //Question 2
  function sumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }
  const numberArray = [1, 2, 3, 4, 5];
  console.log(sumAndAverage(numberArray)); // Output: "Sum: 15, Average: 3.00"
  //Question 3
  function createHTMLElement(tag, text) {
    return `<${tag}>${text}</${tag}>`;
  }
  const tagName = "h1";
  const elementText = "Hello, World!";
  console.log(createHTMLElement(tagName, elementText));// Output: "<h1>Hello, World!</h1>"  
  //Question 4
  function getProductInfo(product) {
    return `Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`;
  }
  const productObject = { name: "Widget", price: 9.99, quantity: 10 };
  console.log(getProductInfo(productObject));// Output: "Product: Widget, Price: $9.99, Quantity: 10"
  //Question 5
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const currentDate = new Date();
  console.log(formatDate(currentDate)); // Output: e.g., "28/07/2023"
  
  //DESTRUCTING:
  //Question 1
  function sumTwoNumbers(numbers) {
    const [num1, num2] = numbers;
    return num1 + num2;
  }
  const numbArray = [5, 7];
  console.log(sumTwoNumbers(numbArray)); // Output: 12
  //Question 2
  function getPersonInfo(person3) {
    const { name, age, occupation } = person3;
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  } 
  const person3 = { name: "Bisma", age: 20, occupation: "Doctor" };
  console.log( (person3)); // Output: "Name: Bisma, Age: 20, Occupation: Doctorr"
  //Question 3
  function getHighestScorer(people) {
    const [highestScorer, ...rest] = people.sort((a, b) => b.score - a.score);
    return highestScorer.name;
  }
  const peopleArray = [
    { name: "Atrooba", score: 85 },
    { name: "Bibi", score: 92 },
    { name: "Zara", score: 78 },
  ];
  console.log(getHighestScorer(peopleArray)); // Output: "Bibi"  
  //Question 4
  function getPersonInitials(person) {
    const { firstName, lastName, middleName = "" } = person;
    return `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
  }
  const personObject2 = { firstName: "Muhammad", lastName: "Talha" };
  console.log(getPersonInitials(personObject2)); // Output: "MT"
  //Question 5
  function getFirstAndLastElements(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return { first, last };
  }
  const stringArray = ["apple", "banana", "cherry", "date"];
  console.log(getFirstAndLastElements(stringArray));// Output: { first: "apple", last: "date" }