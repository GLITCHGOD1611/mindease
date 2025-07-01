const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

const userRoutes = require('./routers/user.routes');
app.use('/user',userRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//http:/localhost:3000/user/get