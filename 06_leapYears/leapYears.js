const leapYears = function(year) {
    //a leap year is a year divisible by 4
    if (year % 4 == 0){
        if(year %100 == 0){
            if(year % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
