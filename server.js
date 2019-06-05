const http = require ("http");  //ESTA CONST ES DE CAJÓN PARA MONTAR EL SERVIDOR
const fs = require("fs");     //ESTA ES PARA USAR EL MODULO FS (FILE SYSTEM)
const port = 8000;   //NUESTRO PUERTO POR DONDE ENTRARAN Y SALDRAN SOLICITUDES Y RESPUESTAS

const historia = "Hola, me llamo Ricardo Dillarza Lugo.";

const server = http.createServer(manejadorDeRespuesta); //NECESITA UN CALLBACK COMO PARAMETRO. La FUNCION ESTA ABAJO

function manejadorDeRespuesta(request, response) { //TAMBIEN PUEDE DECLARARSE LA FUNCION (ANOMNIMA) EN UNA VARIABLE
  /*fs.writeFile("historia.txt", historia, function(err) { //TRES PARAMETROS, SIEMPRE LLEVAN UNA FUNCION PARA VERIFICAR ERRORES
    if(err) {
      throw err;
  }
});

fs.readFile("historia.txt", "utf-8", function (err, contenido){
  if(err) {
    throw err;
  }

  response.write(contenido + "\nTu texto fue leido. "+ "\nEn total escribiste "+contenido.length+" caracteres.");
  response.end();   //SI PONES UN RESPONSE.WRITE TIENES QUE AGREGAR UN RESPONSE. END PARA INDICAR QUE TERMINO LA RESPUESTA.
});
}
*/
//  ARCHIVOS ESTATICOS

//function manejadorDeRespuesta(request, response) { //TAMBIEN PUEDE DECLARARSE LA FUNCION (ANOMNIMA) EN UNA VARIABLE
/*  fs.readFile("static/index.html", "utf-8", function(err, contenido) {
    if(err) {
      throw err;
  }
  response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(contenido);
    response.end();
});
}
*/

//  ABRIR ARCHIVOS


    //LAS SIG INSTRUCCIONES SON PARA VERIFICAR SI EXISTE UN ARCHIVO EN CIERTO LUGAR. SI FUNCIONA!

fs.access("static/index.html", fs.constants.F_OK, function(err) { //PRIMERO SE INDICA EL PATH DEL ARCHIVO A VALIDAR, EL 2º PARAM CREO QUE ES DE CAJON Y EL 3ER PARAM ES LA FUNC ANONIMA PARA VALIDAR SI EXISTE EL ARCHIVO
    if(err) {
      response.write("El archivo no existe");
    } else {
      response.write("El archivo si existe");
    }
    response.end();
  });

  fs.open("static/index.html", "r", function (err, fileDescriptor) { // ABRE UN ARCHIVO
    if(err) {
      throw err;
  }
  });
}



server.listen(port, callback); //TAMBIEN PODEMOS PONER LA FUNCION EXTERNA

  function callback() {
    console.log("Iniciando servidor en puerto " + port);
}
