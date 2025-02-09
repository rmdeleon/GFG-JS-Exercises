function binarySearch(arr, x) {
    return binarySearchRecursive(arr, x, 0, arr.length);
}

function binarySearchRecursive(arr, x, low, high) {
    if (low <= high) {    
        const mid = Math.floor(low + ((high-low)/2));
        if (arr[mid] === x) return mid;
        if (arr[mid] > x) { // left side
            return binarySearchRecursive(arr, x, low, mid -1); 
        } else { // right side
            return binarySearchRecursive(arr, x, mid + 1, high);
        }
    }
    return -1;
}

arr = new Array(2, 3, 4, 10, 40);
x = 10;
n = arr.length;
result = binarySearch(arr, x);
if (result == -1)
    console.log("Element is not present in array")
    else
    {
        console.log("Element is present at index "
                    + result);
    }