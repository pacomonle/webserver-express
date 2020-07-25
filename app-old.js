const http = require('http');

// crear el servidor -> createServer recibe un callback
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = ( {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        } ) 

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');

        // necesario para decir que ya termino la res (respuesta)
        res.end();

    })
    // especificar el puerto
    .listen(8080);

    // para ejecutar el servidor comando en consola-> node app-old

console.log('Escuchando el puerto 8080');