const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./Routes/UserRoutes");
const adminRoutes = require("./Routes/AdminRoutes")

mongoose.connect("mongodb://localhost:27017/AssignmentJiet", {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}).then(() => {
    console.log("MongoDb Connected Successfully")
}).catch(() => {
    console.log("MongoDb was not able to connect at this moment");
})



app.use(userRoutes);
app.use(adminRoutes);

    
const Port = 2412
app.listen(Port, () => {
    console.log(`Server is running on Port : ${Port}`);
});