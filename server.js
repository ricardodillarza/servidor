const http = require ("http");
const port = 8000;

const server = http.createServer(manejadorDeRespuesta); //NECESITA UN CALLBACK COMO PARAMETRO

function manejadorDeRespuesta(request, response) { //TAMBIEN PUEDE DECLARARSE LA FUNCION (ANOMNIMA) EN UNA VARIABLE
  response.write("Hola desde el servidor!");
  response.end();
}

server.listen(port, callback); //TAMBIEN PODEMOS PONER LA FUNCION EXTERNA

  function callback() {
    console.log("Iniciando servidor en puerto " + port);
}
