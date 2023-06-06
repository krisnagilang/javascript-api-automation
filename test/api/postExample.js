const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 10,
            "username": "krisna",
            "firstName": "krisna",
            "lastName": "gilang",
            "email": "krisna@mailsac.com",
            "password": "krisna123",
            "phone": "08728272323",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})