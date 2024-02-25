const express = require ('express');
const app4 = express();
const port = 3004;

app4.get('/app4', (req,res) => {
    res.json({ message: 'Hi from the Express4 server (: !!' });
})

if (require.main === module) {
    app4.listen(port, () => {
      console.log('This server is listening on port ' + port + '!');
    });
}

module.exports = app4