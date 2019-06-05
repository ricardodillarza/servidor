const http = require ("http");
const fs = require("fs");
const port = 8000;


const server = http.createServer(manejadorDeRespuesta); //NECESITA UN CALLBACK COMO PARAMETRO. La FUNCION ESTA ABAJO

function manejadorDeRespuesta(request, response) { //TAMBIEN PUEDE DECLARARSE LA FUNCION (ANOMNIMA) EN UNA VARIABLE
  fs.access("static/index.html", fs.constants.F_OK, function(err) { //PRIMERO SE INDICA EL PATH DEL ARCHIVO A VALIDAR, EL 2º PARAM CREO QUE ES DE CAJON Y EL 3ER PARAM ES LA FUNC ANONIMA PARA VALIDAR SI EXISTE EL ARCHIVO
    if(err) {
      response.write("El archivo no existe");
    } else {
      response.write("El archivo si existe");
    }
    response.end();
  })
}

server.listen(port, callback); //TAMBIEN PODEMOS PONER LA FUNCION EXTERNA

  function callback() {
    console.log("Iniciando servidor en puerto " + port);
}
