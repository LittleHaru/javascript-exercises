const palindromes = function (word) {
    const alphabet = "1234567890qwertyuiopasdfghjklzxcvbnm"
    const cleanedString = word
    .toLowerCase()
    .split('')
    .filter((char) => alphabet.includes(char))
    .join("")
    const reversedString = cleanedString.split('').reverse().join('')
    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
