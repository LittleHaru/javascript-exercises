const repeatString = function(string, repeat) {
    let word = ""
    if (repeat < 0) {
        return "ERROR"
    }
    for (let i = 0; i < repeat; i++){
        word += string 
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
