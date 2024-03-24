const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const {frequencyCounter, mode, checkNumsArray, mean, median} = require('./operations');

app.get('/mean', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('Comma seperated list of nums in query key needed.', 400)
    }
    let numsStrings = req.query.nums.split(',');
    let nums = checkNumsArray(numsStrings);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: 'mean',
        result: mean(nums)
    }
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('query of nums seperated by commas required', 400)
    }
    
    let numsStrings = req.query.nums.split(',');
    let nums = checkNumsArray(numsStrings);
    
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    
    let result = {
        operation: 'median',
        result: median(nums)
    }
    return res.send(result);
});

app.get('/mode', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('query of nums seperated by commas required', 400);
    }

    let numsStrings =  req.query.nums.split(',');
    let nums = checkNumsArray(numsStrings);

    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: mode(nums)
      }
    
      return res.send(result);
});

app.use((req, res, next) => {
    const err = new ExpressError('Not Found', 404);
    return next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});