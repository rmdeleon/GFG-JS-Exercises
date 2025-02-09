function maxCommStr(s1, s2) {
    let m = s1.length;
    let n = s2.length;

    let res = 0;

    // Consider every pair of index and find the length
    // of the longest common substring beginning with 
    // every pair. Finally return max of all maximums.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s1.charAt(i) === s2.charAt(j)) { // found one match
                let newMax = 1;
                let newI = i + 1;
                let newJ = j + 1;
                while ( newI < m && newJ < n && s1.charAt(newI++) === s2.charAt(newJ++)) {
                    debugger;
                    newMax++;
                }
                if (newMax > res) {
                    res = newMax;
                }
            }
        }
    }
    return res;
}

let s1 = "geeksforgeeks";
let s2 = "practicewritegeekscourses";
console.log(maxCommStr(s1, s2));
