require('dotenv').config();

const app = require('./index')

//CHANGE AS NEEDED FOR LOADER.IO// try in router
// app.get('/loaderio-5d0c3726d47ac13c31970ba9f765d7ec/', (req, res) => res.send('loaderio-5d0c3726d47ac13c31970ba9f765d7ec'));




const PORT = process.env.EXPRESS_PORT || 3001;

app.listen(PORT);
console.log(`Server listening at port:${PORT}`);