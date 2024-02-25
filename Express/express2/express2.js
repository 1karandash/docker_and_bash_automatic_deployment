const express = require('express');
const app2 = express();
const port = 3002;

app2.get('/app2', (req,res) => {
    res.json({ message: 'Hi from the Express2 server (: !!' });
})

if (require.main === module) {
    app2.listen(port, () => {
      console.log('This server is listening on port ' + port + '!');
    });
}

module.exports = app2