const repeatString = function(string, number) {
    if (number==0){
        return ""
    }
    else if (number <0) {
        return "ERROR"
    }
    else{    
    let i = 1;
    let result = "";
        while (i<=number){
            result += `${string}`;
            i++;
        }
        return result
    }

};


repeatString('hey',-1)


// Do not edit below this line
module.exports = repeatString;
