const express = require ('express');
const { VerifyTime } = require('./middelware/verifytime');
const cors = require ('cors')
const app = express ()
app.use (cors());
app.get=('/', VerifyTime, (req, res) =>{});

app.listen(8000,() => {console.log("listening to port 8000") } );