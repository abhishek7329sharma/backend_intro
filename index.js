require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const apiData = {
    data: [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "isActive": true,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
        },
        "tags": ["developer", "designer"]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "age": 25,
        "isActive": false,
        "address": {
            "street": "456 Oak Ave",
            "city": "Sometown",
            "state": "TX",
            "zip": "67890"
        },
        "tags": ["manager", "consultant"]
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "age": 28,
        "isActive": true,
        "address": {
            "street": "789 Pine Rd",
            "city": "Yourtown",
            "state": "NY",
            "zip": "11223"
        },
        "tags": ["developer", "analyst"]
    },
    {
        "id": 4,
        "name": "Bob Brown",
        "email": "bob.brown@example.com",
        "age": 35,
        "isActive": true,
        "address": {
            "street": "101 Maple Ln",
            "city": "Hometown",
            "state": "FL",
            "zip": "33445"
        },
        "tags": ["designer", "photographer"]
    }],
    message: 'User data fetched successfully',
    status: 400,
    
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Sucessfully logged in')
})

app.get('/signup', (req, res) => {
    res.send('Sucessfully signed up')
})

app.get('/user', (req, res) => {
    res.json(apiData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})