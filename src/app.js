const express = require("express");

const app = express();

//configured the server to send this response for every request
// app.use((req,res) => {
//     res.send("Hello from the server");
// })

// So we need to configure routes which will return response based on the route
app.use("/test",(req,res) => {
    res.send("Hello from the server");
})

app.use("/",(req,res) => {
    res.send("Welcome to dev tinder");
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

app.listen(3000,() => {
    console.log("Listening on port 3000");
    
});