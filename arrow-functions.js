// Exercise 1
const greetUserArrow = (name) => `Hello, ${name}!`;

// Exercise 2
const calculateAreaArrow = (length, width) => length * width;

// Exercise 3
const getCurrentTimeArrow = () => new Date().toLocaleTimeString();

// Exercise 4
const validatePasswordArrow = (password) => {
  if (password.length >= 8) {
    return "Password is valid";
  } else {
    return "Password must be at least 8 characters";
  }
};

// Exercise 5
const processOrderArrow = (item, quantity) => {
  const total = item.price * quantity;
  const tax = total * 0.08;
  const finalAmount = total + tax;
  return `Order total: ${finalAmount.toFixed(2)}`;
};

// Exercise 6
const createFullName = (first, last) => `${first} ${last}`;

// Exercise 7
const calculateVolume = (length, width, height) => length * width * height;

// Exercise 8
const getFirstElement = (arr) => arr[0];

// Exercise 9
const makeUppercase = (str) => str.toUpperCase();

// Exercise 10
const getSquare = (num) => num * num;

// Exercise 11
const checkAge = (age) => (age >= 18 ? "Adult" : "Minor");

// Exercise 12
const calculateAverage = (a, b, c) => (a + b + c) / 3;

// Exercise 13
const evaluateScores = (s1, s2, s3) => {
  const top = Math.max(s1, s2, s3);

  if (top >= 90) return `Excellent work! Top score: ${top}`;
  if (top >= 70) return `Good job! Top score: ${top}`;
  return `Keep practicing! Top score: ${top}`;
};

// Exercise 14
const calculateSalePrice = (name, price) => {
  const salePrice = price * 0.8;
  return `Product: ${name} - Sale Price: $${salePrice}`;
};
console.log("Testing Part 1:");
console.log(greetUserArrow("Alice")); // Hello, Alice!
console.log(calculateAreaArrow(5, 3)); // 15
console.log(getCurrentTimeArrow()); // current time
console.log(validatePasswordArrow("secret")); // Password must be at least 8 characters
console.log(processOrderArrow({ price: 10 }, 2)); // Order total: 21.60

console.log("\nTesting Part 2:");
console.log(makeUppercase("hello")); // HELLO
console.log(getSquare(4)); // 16
console.log(createFullName("John", "Doe")); // John Doe
console.log(calculateVolume(2, 3, 4)); // 24
console.log(checkAge(25)); // Adult
console.log(checkAge(16)); // Minor
console.log(getFirstElement([1, 2, 3, 4])); // 1
console.log(calculateAverage(85, 92, 78)); // 85
console.log(evaluateScores(95, 87, 92)); // Excellent work! Top score: 95
console.log(evaluateScores(75, 68, 82)); // Good job! Top score: 82
console.log(calculateSalePrice("Laptop", 100)); // Product: Laptop - Sale Price: $80
