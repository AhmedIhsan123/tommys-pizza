// Import the express module
import express from "express";

// Create instance of ane Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3002;

// Define a default route
// req: contains information about the incoming request
// res: allows us to send back a response to the client
// Enable static serving
app.use(express.static("public"));

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

// Define a default route
app.get("/", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/home.html`);
});
