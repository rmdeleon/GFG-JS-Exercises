// JavaScript Program to find the maximum subarray sum using nested loops 

// Function to find the sum of subarray with maximum sum
function maxSubarraySum(arr) {
    let res = arr[0];
    let maxEnding = arr[0];

    for (let index = 0; index < arr.length; index++) {
        const curElem = arr[index];
        maxEnding = Math.max(maxEnding + curElem, curElem);

        res = Math.max(res, maxEnding);
    }

    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));