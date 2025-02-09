// JavaScript program to reverse words in a string

function reverseWords(str) {
    let words = str.split(".");

    let cleanWords = words.filter((word) => word !== "");

    return cleanWords.reverse().join('.');
}

let str = "..geeks..for.geeks.";
console.log(reverseWords(str));