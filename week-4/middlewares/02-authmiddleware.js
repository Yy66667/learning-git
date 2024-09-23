
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const { map } = require('./01-requestcount');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user
let keyCheck;

// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    //  authenticate APIKey here

    
    const keyCheck = req.headers['100xdevs-api-key'];

    if(keyCheck===VALID_API_KEY){
        next();
        console.log(keyCheck)
    }else if(keyCheck!==VALID_API_KEY){
        res.status(401).json({
            message:'Invalid or missing API key'
        })
        console.log(keyCheck)
    }
        
}
app.use(express.json())
app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

module.exports = app;

app.listen(3000)