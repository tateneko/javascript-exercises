const removeFromArray = function() {

    theArray = arguments[0];
    toRemove = Array.from(arguments).slice(1);

    for (i = toRemove.length - 1; i > -1; i--) {
        
        while (theArray.indexOf(toRemove[i]) != -1) {

        theArray.splice(theArray.indexOf(toRemove[i]), 1);

        }

    }

    return theArray

};


// Do not edit below this line
module.exports = removeFromArray;