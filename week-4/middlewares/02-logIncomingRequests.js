//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    
    console.log(`${method} ${url} - ${timestamp}`);

    next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;

/*
const express = require('express');
const app = express();

// Middleware to log all incoming requests in the expected format
function logRequests(req, res, next) {
    const timestamp = new Date().toISOString();  // Current timestamp
    const method = req.method;                   // HTTP method (GET, POST, etc.)
    const url = req.url;                         // Requested URL

    // Log the request in the format: METHOD URL - TIMESTAMP
    console.log(`${method} ${url} - ${timestamp}`);

    next(); // Call the next middleware or route handler
}

// Apply the logging middleware
app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

// Export the app for testing without starting the server
module.exports = app;
*/