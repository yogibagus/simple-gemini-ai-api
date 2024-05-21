<!-- Create read me for this project, tutorial install and use -->
# Text Generation API

This project is an Express.js server that provides an API endpoint for generating text using the Google Gemini Pro API. The server accepts POST requests with a JSON body containing the text input and returns the generated text from the Gemini Pro model.

## Features

- Parse incoming JSON data
- Make HTTPS requests to the Google Gemini Pro API
- Handle errors gracefully
- Log requests and responses

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A valid API key for the Google Gemini Pro API

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/text-generation-api.git
    cd text-generation-api
    ```

2. Install the dependencies

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your API key

    ```env
    API_KEY=your_google_gemini_pro_api_key
    ```

### Running the Server

Start the server with the following command:

```bash
node index.js
