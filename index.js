require('dotenv').config({ path: './.env.local' });

const app = require('./api');

// const port = process.env.PORT || 5000;

// app.listen(port, _ => {
//     const portString = `Server running on port ${ port }`;
//     const blockade = '='.repeat(portString.length + 2);
//     console.log(`\n${ blockade }\n ${ portString }\n${ blockade }\n`);
// });

module.exports = app;
