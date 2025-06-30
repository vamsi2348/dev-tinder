const express = require("express");

const app = express();

//configured the server to send this response for every request
// app.use((req,res) => {
//     res.send("Hello from the server");
// })

// So we need to configure routes which will return response based on the route
// app.use("/test",(req,res) => {
//     res.send("Hello from the server");
// })

// app.use("/",(req,res) => {
//     res.send("Welcome to dev tinder");
// })

// // the order of routes matter if I given / at the start no other routes will be work
// //app.use will map all the api calls
// app.use((req, res) => {
//   res.status(404).json({
//     error: 'Route not found',
//     path: req.originalUrl,
//     method: req.method
//   });
// });

//app.get
app.get('/user',(req,res) => {
    res.send({firstName:"raju","lastName": "yadav"})
})

app.post('/user',(req,res) => {
    res.send("Updated user in DB sucessfully")
})

app.post('/delete',(req,res) => {
    res.send("Deleted user sucessfully")
})

app.listen(3000,() => {
    console.log("Listening on port 3000");
    
});