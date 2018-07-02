function checkPalindrome(inputString) {
    let reverseString = inputString.split("");
    reverseString = reverseString.reverse();
    reverseString = reverseString.join("");
    return inputString === reverseString;
}

