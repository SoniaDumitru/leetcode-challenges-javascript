// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

function isHappy(n){
  let a = n.toString();
  let sum  =  0;
  for (let digit of a) {
      let product = digit * digit;
      sum += product;
  }
  if (sum === 1) {
    return true;
  } else {
    return isHappy(sum);
  }
};

// isHappy(19) => result: true
