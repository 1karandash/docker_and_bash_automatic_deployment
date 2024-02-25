const express = require ('express');
const app3 = express();
const port = 3003;

app3.get('/app3', (req,res) => {
    res.json({ message: 'Hi from the Express3 server (: !!' });
})

if (require.main === module) {
    app3.listen(port, () => {
      console.log('This server is listening on port ' + port + '!');
    });
}

module.exports = app3