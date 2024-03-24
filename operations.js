function frequencyCounter(arr) {
    return arr.reduce((acc, next) => {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
}

function mode(arr){
    let freq = frequencyCounter(arr);
    let count = 0;
    let mostFreq;

    for(let k in freq){
        if(freq[k] > count){
            mostFreq = k;
            count = freq[k];
        }
    }
    return +mostFreq;
}

function checkNumsArray(numsStrings){
    let result = [];

    for(let i = 0; i < numsStrings.length; i++){
        let toNum = Number(numsStrings[i])
        if(Number.isNaN(numsStrings[i])){
            return new Error(`${numsStrings[i]} at idx ${i} is not a valid num`);
        }
    result.push(toNum);
    }
    return result;
}

function mean(nums){
    if(!nums.length){
        return 0;
    }
    return nums.reduce(function(acc, cur){
        return acc + cur; }) / nums.length;
}

function median(nums){
    nums.sort((x, y) => x - y);
    let middle = Math.floor(nums.length / 2);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[middle] + nums[middle -1]) / 2;
    } else {
        median = nums[middle];
    }
    return median
}

module.exports = {
    frequencyCounter,
    mode,
    checkNumsArray,
    mean,
    median
}