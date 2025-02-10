function maxCommStr(s1, s2) {
    let m = s1.length;
    let n = s2.length;

    let res = 0;

    // Consider every pair of index and find the length
    // of the longest common substring beginning with 
    // every pair. Finally return max of all maximums.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let curr = 0;
            while ( ((i + curr) < m) && ((j + curr) < n) 
                && (s1.charAt(i + curr) === s2.charAt(j + curr))) {
                curr++;
            }
            res = Math.max(res, curr);
        }
    }
    return res;
}

let s1 = "geeksforgeeks";
let s2 = "practicewritegeekscourses";
console.log(maxCommStr(s1, s2));
