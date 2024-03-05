const repeatString = function(string, num) {
    
    let newString = "";

    if (num < 0) {
        newString = 'ERROR';
    } else {
        for (let i = num; i > 0; --i) {
            newString = newString.concat(string);
        }
    }

    return newString;

};

// Do not edit below this line
module.exports = repeatString;
