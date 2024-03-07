const reverseString = function(string) {

    let reverseString = '';

    while (string.length > 0) {
        
        reverseString = reverseString + string.slice(-1);
        string = string.slice(0, -1);

    }

    return reverseString

};

// Do not edit below this line
module.exports = reverseString;
