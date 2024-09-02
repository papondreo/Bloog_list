
const express = require('express');

// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');

// const candRouter = require('./routes/candRouter');
// const tokensRouter = require('./routes/tokens.router');
// const authRouter = require('./routes/authRouter');



const app = express();


// app.use(morgan('dev'));
// app.use(cookieParser());


app.use(express.urlencoded({extended: true}))

app.use(express.json());

// app.use('/api/tokens', tokensRouter);
// app.use('/api/auth', authRouter);

// app.use('/api/cands', candRouter);


module.exports = app;