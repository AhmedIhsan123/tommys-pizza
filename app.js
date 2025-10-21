// Import the express module
import express from "express";

// Create instance of ane Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3000;

// Define a default route
// req: contains information about the incoming request
// res: allows us to send back a response to the client
// Enable static serving
app.use(express.static("public"));

// Install middleware for data readings
app.use(express.urlencoded({ extended: true }));

// Create an array to store orders
const orders = [];

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

// Define a default route
app.get("/", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define a "contact-us" root
app.get("/contact-us", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// Define a "confirmation" root
app.get("/confirm", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Define a "admin" root
app.get("/admin", (req, res) => {
	res.send(orders);
});

// Define a "submit" root
app.post("/submit-order", (req, res) => {
	// Create a JSON object to store the data
	const order = {
		fname: req.body.fname,
		lname: req.body.lname,
	};

	// Push the order to the orders array
	orders.push(order);

	console.log(orders);
});
