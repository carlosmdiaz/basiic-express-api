const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});