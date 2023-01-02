const sumAll = function(int1,int2) {
    if(typeof(int1) != 'number'||typeof(int2) != "number"){
        return "ERROR";
    }
    if(int1< 0 || int2< 0)
    {
        return "ERROR";
    }
    let big=int1<int2?int2:int1;
    let small=int1>int2?int2:int1;
    let sum=0;
    while (small<=big)
    {
        sum+=small;
        small++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
