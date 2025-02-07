// JavaScript program to find equilibrium index of an array
// using prefix sum and suffix sum variables

function equilibriumPoint(arr) {
    let prefSum = 0;
    let total = arr.reduce((sum, ele) => sum + ele, 0);

    for (let i=0;i < arr.length; i++) {
        let curElem = arr[i];
        let suffSum = total - prefSum - curElem;
        if (prefSum === suffSum) {
            return i;
        }
        
        prefSum += curElem;
    }
    // There is no equilibrium point
    return -1;
}

// Driver code
const arr = [1, 7, 3, 6, 5, 6];
console.log(equilibriumPoint(arr));