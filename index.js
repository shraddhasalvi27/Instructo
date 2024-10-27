const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://shraddha:B5RrMXMmOvNfNUBv@cluster0.89fvn.mongodb.net/Instructo");
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

main();

