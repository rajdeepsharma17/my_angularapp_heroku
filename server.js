const express = require('express')
const app = express()


app.use(express.static(__dirname+'/dist'))

let user = {
    first_name: "John",
    last_name: "Appleseed"
}

app.get('/api/json', (req, res)=>{
    res.json(user)
})

app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/dist/index.html')
});

app.listen(3000, ()=>{
    console.log("Server has started");
});