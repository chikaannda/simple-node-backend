const http = require("http");
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    // Request handler goes here

    // Content with plain text format
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type':'text/plain',
        });
        res.end('ini adalah halaman utama dengan content type plain text.');
    }

    // Content with JSON format
    else if(req.url === '/contacts') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        let contacts = JSON.stringify([
            { name: "Chika", phone: "085645973827" },
            { name: "Ananda", phone: "087783253999" },
            { name: "Deagusti", phone: "087784487999" }
        ]);
    
        res.end(contacts);
    }

    // Content with HTML Format
    else if(req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.end('<h1>ini halaman about, dengan tipe konten HTML')
    }

    // Content with HTML File
    else if(req.url === '/product') {
        fs.readFile('./public/index.html', (err, data) => {
            if(err) {
                res.writeHead(404);
                res.write('Halaman ini tidak ditemukan');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        })
    }

})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})