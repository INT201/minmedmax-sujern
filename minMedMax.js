const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
  const seekValue = [num1,num2,num3]

    let maxValue = seekValue[0]
    let minValue = seekValue[0]
    let medValue = seekValue[0]

    for(const value of seekValue){
        if(value > maxValue){
            maxValue = value;
        }
    }

    for(const value of seekValue){
        if(value < minValue){
            minValue = value;
        }
    }

    for(const value of seekValue){
        if(value != minValue && value != maxValue){
            medValue = value
        }
        if(num1 === num2){
            medValue = num1
        }
        if(num1 === num3){
        }
        if(num2 === num3){
            medValue = num2
        }
    }
    
    return {min: minValue, mid: medValue, max: maxValue}
}
module.exports = minMedMax
