const removeFromArray = function() {

    console.log(arguments)

    theArray = arguments[0];
    toRemove = Array.from(arguments).slice(1);

    for (i = toRemove.length - 1; i > -1; i--) {

        theArray.splice(theArray.indexOf(toRemove[i]), 1);

    }

    return theArray

};



removeFromArray([1,2,3,4,5,6],2,3)cd -4 



// Do not edit below this line
module.exports = removeFromArray;