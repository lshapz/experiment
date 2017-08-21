const http = require('http');
const express = require('express');
const router = express.Router();
const windowmanager = require('windowmanager');
const app = express();
const server = http.createServer(app);
const webPort = 3000;
app.use(express.static('public'));
server.listen(process.env.PORT || webPort, () => {
    console.log("Listening on %j\n", server.address());
    // console.log(windowmanager)

});
app.use('/', express.static(windowmanager.distPath, { index: false }));

// module.exports = router;
