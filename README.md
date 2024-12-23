# REST API Server

This is a simple REST API server built with Express.js. It has two routes: `/store` and `/retrieve`.

## Routes

### POST /store

- **Description**: Stores the text sent in the request body.
- **Request Body**: `{ "text": "your text here" }`
- **Response**: `200 OK`

### GET /retrieve

- **Description**: Retrieves the last text that was stored.
- **Response**: `{ "text": "last stored text" }`

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/ramoliyaYug/api_server.git
    ```
2. Navigate to the project directory:
    ```sh
    cd rest_api
    ```
3. Install dependencies:
    ```sh
    npm install express
    ```
4. Start the server:
    ```sh
    node server.js
    ```

## Usage

- To store text, send a POST request to `/store` with a JSON body containing the text.
- To retrieve the last stored text, send a GET request to `/retrieve`.

## Example

### Storing Text

```sh
curl -X POST http://localhost:3000/store -H "Content-Type: application/json" -d '{"text": "Hello, World!"}'
```

### Retrieving Text

```sh
curl http://localhost:3000/retrieve
```

## Technologies Used

- Node.js
- Express.js

