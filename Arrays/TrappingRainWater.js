function maxWater(arr) {
    let left = 1;
    let right = arr.length - 2;

    // lMax : Maximum in subarray arr[0..left-1]
    // rMax : Maximum in subarray arr[right+1..n-1]
    let lMax = arr[left - 1];
    let rMax = arr[right + 1];

    let res = 0;
    while (left <= right) {
      
        // If rMax is smaller, then we can decide the 
        // amount of water for arr[right]
        if (rMax <= lMax) {
        
            res += Math.max(0,rMax - arr[right]);

            rMax = Math.max(rMax, arr[right]);

            right--;
        } else { 
            res += Math.max(0, lMax - arr[left]);

            lMax = Math.max(lMax, arr[left]);

            left++;

        }
    }
    return res;
}

// Driver code
let arr = [2, 1, 5, 3, 1, 0, 4];
console.log(maxWater(arr));