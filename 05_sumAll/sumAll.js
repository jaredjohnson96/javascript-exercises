const sumAll = function(n1, n2) {
    if(n1>0 && n2>0) {
        if (typeof(n1) === 'number' && typeof(n2) === 'number') {
            if (Number.isInteger(n1) && Number.isInteger(n2)){
                m1 = Math.min(n1,n2)
                m2 = Math.max(n1,n2)
                let sum = 0
                    for (i = m1; i <= m2; i++){
                        sum += i
                    }
                    console.log(sum)
                    return sum
                }            
            else {
                return 'ERROR'
            }
        }
        else {
            return 'ERROR'
        }
    }      
    else {
        return 'ERROR';
    }
};

sumAll(1.1,1)

// Do not edit below this line
module.exports = sumAll;
