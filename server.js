const http = require ("http");
const fs = require("fs");
const port = 8000;

const historia = "Hola, soy una prueba de escritura.";
const server = http.createServer(manejadorDeRespuesta); //NECESITA UN CALLBACK COMO PARAMETRO. La FUNCION ESTA ABAJO

function manejadorDeRespuesta(request, response) { //TAMBIEN PUEDE DECLARARSE LA FUNCION (ANOMNIMA) EN UNA VARIABLE
  fs.writeFile("historia.txt", historia, function(err) {
    if(err) {
      throw err;
  }
});

fs.readFile("historia.txt", "utf-8", function (err, contenido){
  if(err) {
    throw err;
  }

  response.write(contenido + "\nTu texto esta bien escrito. "+ "\nEn total escribiste "+contenido.length+" caracteres.");
  response.end();
})
}
  /*fs.access("static/index.html", fs.constants.F_OK, function(err) { //PRIMERO SE INDICA EL PATH DEL ARCHIVO A VALIDAR, EL 2º PARAM CREO QUE ES DE CAJON Y EL 3ER PARAM ES LA FUNC ANONIMA PARA VALIDAR SI EXISTE EL ARCHIVO
    if(err) {
      response.write("El archivo no existe");
    } else {
      response.write("El archivo si existe");
    }
    response.end();
  })
}
*/
server.listen(port, callback); //TAMBIEN PODEMOS PONER LA FUNCION EXTERNA

  function callback() {
    console.log("Iniciando servidor en puerto " + port);
}
