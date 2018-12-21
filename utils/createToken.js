const jwt = require('jsonwebtoken');

const createToken = (payload, secret, expiresIn) =>
	`Bearer ${jwt.sign(payload, secret, { expiresIn })}`;

module.exports = createToken;
