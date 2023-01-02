const reverseString = function(string) {
    let result ="";
    let l=string.length;
    for (l;l>0;l--){
        result += string[l-1];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
