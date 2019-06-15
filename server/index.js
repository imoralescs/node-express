const express = require('express')
const path = require('path')

const app = express()

app.all('*', (req, res) => {
    res.json({ ok: true })
})

app.listen(3000, () => {
    console.log(`Server stated at http://localhost:${3000}`)
})