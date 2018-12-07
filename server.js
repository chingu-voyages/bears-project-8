require('dotenv').config({
	path: '.env.local',
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;

// Tell Mongoose to use native Promise instead of lib like bluebird
mongoose.Promise = global.Promise;
// And connect mongoose to Mlab instance of MongoDB
mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error('Connection to MongoDB failed:', err));

// create Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());

//  HTTP request logger middleware - will log all requests to STDOUT (command line)
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(PORT, () => {
	console.info(`Listening on port ${PORT}, in ${process.env.NODE_ENV} environment.`);
});
