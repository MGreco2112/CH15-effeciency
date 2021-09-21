let string = "to help people learn to code for free We accomplish this by creating thousands of videos, articles, and interactive coding lessons";

let str1 = "";
let lessThanSix = "";
let sixOrMore = "";
let word = "";

let strArray = [];

for (let i = 0; i < string.length; i++) {
    if (string[i] != ",") {
        str1 += string[i];
    }
}

for (let i = 0; i < str1.length; i++) {

    if (str1[i] !== " ") {

        word += str1[i];

        if (str1[i + 1] === undefined) {
            strArray.push(word);
        }
            
    } else if (str1[i] === " ") {

        strArray.push(word);
        word = "";
    }


}

//separate the words into two strings. One for five or less characters, one for six or more

for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length <= 5) {
        lessThanSix += strArray[i] + " ";
    } else if (strArray[i].length >= 6) {
        sixOrMore += strArray[i] + " ";
    }
}

// console.log(strArray);

console.log(lessThanSix);
console.log(sixOrMore);

