/* eslint-disable no-underscore-dangle, import/order */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const createToken = require('../../utils/createToken');

const userData = {
    id:'5c4e0f3cf936ff053883c599'
	name: 'Tester',
	email: 'test@test.cc',
	password: 'pass1234',
    password2: 'pass1234',
    
};

// const updatedUser ={
//     name: 'Tester1',
//     email: 'test@test.cc',
// }

describe('API - User', () => {
    let token;
    let user;
    
    beforeAll(done => {
		request
			.post('/api/auth/register')
			.send(userData)
			.end((err, { body }) => {
				// Some prop juggling to avoid calling two endpoints here - ugly but necessary
				body.id = body._id; // JWT decode expects id not _id
				token = createToken(body, process.env.JWT_SECRET, '1h'); // create test token
				user = body;
				done();
			});
	});
	afterAll(done => {
		try {
			const { users } = mongoose.connection.collections;
			// Collection is being dropped.
			users
				.drop()
				// Connection to Mongo killed.
				.then(() => mongoose.disconnect(done));
			// Server connection closed.
			// .then(() => server.close(done));
		} catch (err) {
			console.error(err);
		}
    });
    //check if the code above need to be changed


    //USER UPDATE TEST
    describe('User - Update', () => {
        test('it should require authentication', () => {
            request.put('/api/user/:id').then(response =>{
                expect(response.statusCode).toBe(401);
            })
        })
    })
    //user update should require authentication
    // no data => 400 error
    // user is authenticated
    // correct data passed => user name updated
    // correct data passed => user image updated
    // invalid ID => 401
    // user not found => 404

    //USER DELETE
    //user delete should require authentication
    //user authenticated => correct id passed => user deleted
    // invalid ID => 401