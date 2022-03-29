

// 1. Return a string in reverse
var word = "kayak";

function revString(input) {
    input.split().reverse().join();
    return input;
}

revString(word);

// function
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//     return //Something
// };



function palindrome(input) {
    var rev = input.split().reverse().join();
    if (rev === input) {
        return true;
    }
    else {
        return false;
    }
}
// 2. Return true if palindrome and false if not
//     ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };