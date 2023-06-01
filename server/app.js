require('dotenv').config();

const app = require('./index')

//CHANGE AS NEEDED FOR LOADER.IO
app.get('/loaderio-8065e42ae55e3fbf7116bc4e286e221d/', (req, res) => res.send('loaderio-8065e42ae55e3fbf7116bc4e286e221d'));



const PORT = process.env.EXPRESS_PORT || 3001;

app.listen(PORT);
console.log(`Server listening at port:${PORT}`);