const express = require('express');
const https = require('https'); // For making HTTPS requests

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port 3000

app.use(express.json()); // Parse incoming JSON data

app.post('/generate-text', async (req, res) => {
    console.log("Request body: ", req.body);
    try {
        const apiKey = process.env.API_KEY;
        const url = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=';

        const reqBody = JSON.stringify({
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": req.body.text,
                        }
                    ]
                }
            ]
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            rejectUnauthorized: false // Accept self-signed certificates (for development only)
        };

        // Make a POST request to the API
        const request = https.request(url + apiKey, options, (response) => {
            let data = '';
            // A chunk of data has been received
            response.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received
            response.on('end', () => {
                try {
                    const responseData = JSON.parse(data);
                    console.log('Response:', responseData);
                    res.status(200).json({
                        message: 'Text generation successful!',
                        response: responseData
                    });
                } catch (error) {
                    console.error('Error parsing response:', error);
                    res.status(500).json({ message: 'Internal server error' });
                }
            });
        });

        // Handle errors with the request
        request.on('error', (error) => {
            console.error('Error making API request:', error);
            res.status(500).json({ message: 'Internal server error' });
        });

        // Send the request body
        request.write(reqBody);
        request.end();
    } catch (error) {
        console.error('Error in server:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Generate image


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});