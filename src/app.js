const express = require("express");

const app = express();
const { adminAuth } = require("./middlewares/adminAuth")
//--------------------------------------------configured the server to send this response for every request------------------------------------------
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
// app.get('/user/:userId',(req,res) => {
//     console.log(req.params);
//     res.send({firstName:"raju","lastName": "yadav"})
// })

// app.post('/user',(req,res) => {
//     res.send("Updated user in DB sucessfully")
// })

// app.post('/delete',(req,res) => {
//     res.send("Deleted user sucessfully")
// })


//--------------------------------------------------------------multi Route handlers--------------------------------------------------------------------
// app.use("/user",(req,res,next)=> {
//     //Route handler
//     console.log("Handler1");
//     next();
//     // res.send("First");
// },(req,res) => {
//     console.log("Handler2");
//     res.send("Second");
// },(req,res) => {
//     console.log("Handler3");
//     res.send("third");
// },(req,res) => {
//     console.log("Handler4");
//     res.send("fouth");
// })

// 2nd way
// app.use("/user",(req,res,next)=> {
//     console.log("Handler1");
//     next();
// });
// app.use("/user",(req,res,next)=> {
//     console.log("Handler1");
//     res.send("second")
// });

//third way
// app.use('/user',[rh1,rh2,rh3.....]);

//-----------------------------------------------------middle ware usage of next-----------------------------------------------------------------------
// here / is the main route handler which will check for all the routes so if it passes the required criteria then only it will pass to the next route?
// app.use('/',(req,res,next)=>{
//     console.log("Main handler");
//     next();
// });

// app.use('/user',(req,res,next)=>{
//     console.log("User handler");
//     res.send("User handled passed from main route");
// });


// app.use('/user',(req,res,next)=>{
//     console.log("User handler");
//     res.send("User handled passed from main route - 2nd");
// });

// ----------------------------------------------------------use of middle ware -------------------------------------------------------------------------
// here for all the admin routes we written a middle so every route starting with /admin will be checked for the authorization and will move further
// type 1
// app.use('/admin',(req,res,next)=>{
//     // const token = res.body?.token;
//     const token = "xyz";
//     const isAuthorization = token === "xyz1";
//     if(!isAuthorization){
//         res.status(401).send("Unauthorized request");
//     }else{
//         next();
//     }
// });

//type 2
// write middle ware in a separate file and export it and use it(Industry way)
// app.use('/admin', adminAuth);

// app.use('/admin/getAllData',(req,res,next)=>{
//     res.send("Sent all data");
// });



// ----------------------------------------------------------------------------Error handling---------------------------------------------------------------------
// app.use((err,req,res,next)=> {
//     if(err){
//         res.status(501).send("Something went wrong!!!!!!!!!!!!")
//     }
// })

app.get("/getUserData",(req,res,next)=> {
    
    next();
    throw new Error("skhjdfbgsdjkhfsk");
})

app.get("/getUserData",(req,res)=> {
    console.log("Second route after error");
    res.send("hi from second handler")
})

app.use("/",(err,req,res,next)=> {
    if(err){
        res.status(501).send("Something went wrong!!!!!!!!!!!!")
    }
})

app.listen(3000,() => {
    console.log("Listening on port 3000");
    
});