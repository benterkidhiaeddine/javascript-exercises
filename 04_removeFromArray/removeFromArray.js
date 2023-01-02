const removeFromArray = function(list,...args) {
    //remember elements to be removed in a dict
    let dict=new Map();
    result=[];
    l = args.length;
    for (let i= 0 ;i<l;i++)
    {
        dict.set(args[i],i);
    }
    for (el of list){
        //if the element of the list was not used to create the hashmap then it should not be added to the result list
        if(dict.get(el)==undefined){
            result.push(el);
        }

    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
