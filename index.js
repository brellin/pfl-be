require('dotenv').config();

const server = require('./api');

const port = process.env.PORT || 5000;

server.listen(port, _ => {
    const portString = `Server running on port ${ port }`;
    const blockade = '='.repeat(portString.length + 2);
    console.log(`\n${ blockade }\n ${ portString }\n${ blockade }\n`);
});
