const removeFromArray = function(array1, ...input1) {
    input1 = [...input1]
    const len = array1.length
    console.log(len)
    for (var i of input1){
        while (array1.indexOf(i)>=0){
                array1.splice(array1.indexOf(i),1)
                console.log(array1)
            }
        }
        console.log(array1)
        return array1
    } ;

removeFromArray([1,2,4,4,2,2],2,4)


// Do not edit below this line
module.exports = removeFromArray;
