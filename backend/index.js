const { response } = require('express');
const express = require('express');

const app = express();

app.get("/",(req, resp)=>{
    resp.send("App is working")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.warn(`Server is running on port ${PORT}`));