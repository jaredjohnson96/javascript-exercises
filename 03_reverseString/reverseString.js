const reverseString = function(astring) {    
    const len = astring.length
    let revastring = ""
    for (let i = 0; i < len; i++) {
        revastring = astring[i] + revastring
    }
    return revastring
    

};

reverseString ("hello")

// Do not edit below this line
module.exports = reverseString;
