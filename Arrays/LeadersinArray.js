// Function to find the leaders in an array
function leaders(arr) {
    const lastElem = arr[arr.length-1];
    // init max with last value which is always a leader
    let maxRightElem = lastElem;
    // add last values to new results array
    let results = [lastElem];

    //loop down starting on the one-before-last elem
    for (let i = arr.length-2; i > 0; i--) {
        const curElem = arr[i];
        if (curElem >= maxRightElem) {
            results.push(curElem);
            maxRightElem = curElem;
        }
    }
    return results.reverse();
    
}

const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);

console.log(result.join(" "));