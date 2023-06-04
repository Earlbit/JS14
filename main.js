function checkNumberConditions(num1, num2) {
    if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage: calling the function with two numbers
  console.log(checkNumberConditions(15, 10)); // Output: true
  console.log(checkNumberConditions(20, 5)); // Output: true
  console.log(checkNumberConditions(10, 10)); // Output: true
  console.log(checkNumberConditions(25, 5)); // Output: false
  