const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});



