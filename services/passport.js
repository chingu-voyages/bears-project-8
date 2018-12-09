const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const options = {};

// Function that accepts a request as the only parameter and returns either the JWT as a string or null.
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// String or buffer containing the secret or PEM-encoded public key for verifying the token's signature
options.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
	passport.use(
		// Authenticate endpoints using a JSON web token
		new JwtStrategy(options, (jwtPayload, done) => {
			User.findById(jwtPayload.id)
				.then(user => {
					if (!user) return done(null, false);

					return done(null, user);
				})
				.catch(err => console.log(err));
		})
	);
};
