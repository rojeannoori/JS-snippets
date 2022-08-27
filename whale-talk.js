// whale talk:

const input = 'hello';
const vowels = ['a','e', 'i', 'o', 'u'];
var resultArray = [];

for (var i = 0 ; i < input.length ; i++){

    if (input[i]==='e'){
        resultArray.push(input[i])
    }
    
    for(var j = 0 ; j < vowels.length ; j++){
        if (input[i]===vowels[j]){
            resultArray.push(input[i])
        }
    }
}

var str = '';
for(var s = 0 ; s<resultArray.length ; s++){
    str = str + resultArray[s]
}
console.log(str)

//below is better
console.log( 'new: ' + resultArray.join('').toUpperCase())
