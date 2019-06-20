const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response
        .render('index', {
            title: 'Home'
        })
})

app.get('/user', (request, response) => {
    response
        .render('user', {
            title: 'Profile',
            userProfile: {
                username: 'Auth0'
            }
        })
})

app.all('*', (request, response) => {
    response
        .status(200)
        .send('Hi, Developers')
})

app.listen(port, () => {
    console.log(`Server stated at http://localhost:${port}`)
})