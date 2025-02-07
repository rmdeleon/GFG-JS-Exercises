// JavaScript program to find the missing number

// naive approach
function missingNumberNaive(arr) {
  const n = arr.length + 1;

  const hashArr = new Array(n).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    hashArr[element]++;
  }

  for (let i = 1; i < arr.length+1; i++) {
    const element = arr[i];
    if (hashArr[i] === 0) {
        return i;
    }
  }
}

function missingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = 0;

    for (let i=0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let expectedSum = (n * (n + 1)) / 2;

    return expectedSum - totalSum;
}
 
const arr = [ 1, 2, 3, 5 ];  
const res = missingNumber(arr);
console.log(res);