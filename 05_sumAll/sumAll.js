const sumAll = function(...args) {

    sortedArguments = [...args].sort(function(a, b){return a-b});

    let sum = 0

    if (arguments[0] > 0 && 
        arguments[1] > 0 &&
        Number.isInteger(arguments[0]) &&
        Number.isInteger(arguments[1])) {

        for (let i = sortedArguments[0]; i <= sortedArguments[1]; ++i) {
            sum += i
        }
    
    } else {

        return "ERROR"

    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
