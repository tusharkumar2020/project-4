// Requiring axios module for making HTTP requests
const axios = require('axios').default;

// Function to connect to a URL and handle the response
const connectToURL = (url) => {
    // Sending a GET request to the specified URL using axios
    const req = axios.get(url);
    // Logging the initial promise object
    console.log(req);
    // Handling the promise resolution
    req.then(resp => {
        // Logging the fulfillment message
        console.log("Fulfilled");
        // Logging the response data
        console.log(resp.data);
    })
    // Handling the promise rejection
    .catch(err => {
        // Logging the rejection message with the URL
        console.log("Rejected for url " + url);
        // Logging the error message
        console.log(err.toString());
    });
}

// Valid URL
connectToURL('https://raw.githubusercontent.com/tusharkumar2020/project-4/refs/heads/master/CD220Labs/async_callback/sampleData.json');
// Invalid URL
connectToURL('https://raw.githubusercontent.com/tusharkumar2020/project-4/refs/heads/master/CD220Labs/async_callback/sampleData.json');