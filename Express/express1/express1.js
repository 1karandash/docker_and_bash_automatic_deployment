const express = require('express');
const app1 = express();
const port = 3001;

app1.get('/app1', (req,res) => {
    res.json({ message: 'Hi from the Express1 server (: !!' });
})

if (require.main === module) {
    app1.listen(port, () => {
      console.log('This server is listening on port ' + port + '!');
    });
}

module.exports = app1