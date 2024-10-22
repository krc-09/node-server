const http = require('http');
const server = http.createServer(

    (req,res) => {
        console.log(res)
        console.log('Kankana')
    }
);
server.listen(4000);