// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function generateFibonacci(length) {
    if (length <= 2) {
      throw new Error("Input must be greater than 2");
    }
  
    const fibonacciArray = [1, 1];
  
    for (let i = 2; i < length; i++) {
      const nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
    }
  
    return fibonacciArray;
  }

  const fibonacciLength1 = 6;
  const result1 = generateFibonacci(fibonacciLength1);
  console.log("Test Case 1:", result1);
  
  const fibonacciLength2 = 10;
  const result2 = generateFibonacci(fibonacciLength2);
  console.log("Test Case 2:", result2); 

// b) Create the function that makes the test pass.

// Pseudo code: I had to use chatgpt to get the answer.  I tried using it to also breakdown and explain how it got to that answer but I just had a hard time understanding a lot of what it was saying.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

function calculateTally(votes) {
    const tally = votes.upVotes - votes.downVotes;
  
    return tally;
  }
  
  const votes1 = { upVotes: 13, downVotes: 2 };
  const result1 = calculateTally(votes1);
  console.log("Test Case 1:", result1);
  
  const votes2 = { upVotes: 2, downVotes: 33 };
  const result2 = calculateTally(votes2);
  console.log("Test Case 2:", result2);
  
// b) Create the function that makes the test pass.

// Pseudo code: Again, I had to use chatgpt to get the answer.  It started to make a bit more sense towards the end after chatgpt broke it down, but I would like more work and time to understand this better.
