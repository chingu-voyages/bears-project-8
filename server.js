require('dotenv').config({
	path: '.env.local',
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const authRoutes = require('./routes/authRoutes');
const habitRoutes = require('./routes/habitRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const DB_URI =
	process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'ci'
		? 'mongodb://test:test123@ds127624.mlab.com:27624/habit-app-test'
		: process.env.MONGO_URI;

// Tell Mongoose to use native Promise instead of lib like bluebird
mongoose.Promise = global.Promise;
// And connect mongoose to Mlab instance of MongoDB
mongoose
	.connect(DB_URI, { useNewUrlParser: true })
	.then(() => console.info('Connected to MongoDB'))
	.catch(err => console.error('Connection to MongoDB failed:', err));

// create Express app
const app = express();

// Passport config
app.use(passport.initialize());
require('./services/passport')(passport);

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  HTTP request logger middleware - will log all requests to STDOUT (command line)
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/habit', habitRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
	res.send('Hello World');
});

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'ci') {
	app.listen(PORT, () => {
		console.info(`Listening on port ${PORT}, in ${ENV} environment.`);
	});
}

module.exports = { app };
