const express = require('express');
const app = express();
const PORT = 5000


app.get('/', (req, res) => {
    res.send('Hello from kubernetes')
})

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))