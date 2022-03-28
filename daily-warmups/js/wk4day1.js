

// 1. Return a string in reverse

function revString(input) {
    input.split();
    input.reverse();
    return input.join();
}

// function
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//     return //Something
// };

function palindrome(input) {
    var rev = input.split();
    rev.reverse();
    rev.join()
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