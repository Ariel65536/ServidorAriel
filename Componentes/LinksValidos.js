var fs = require('fs');
var http = require('http');

let LinksValidos = [
    {
        Tipo: "Link",
        Nombre: "Inicio"
    },
    {   
        Tipo: "Link",
        Nombre: "Red",
    },
    {
        Tipo: "Menu",
        Nombre: "Mapa",
        Objetos: [
            {
                Tipo: "Link",
                Nombre: "Ubicaciones"
            },
            {
                Tipo: "Link",
                Nombre: "Canchas"
            }
        ]
    },
    {
        Tipo: "Link",
        Nombre: "Movimientos"
    },
    {
        Tipo: "Link",
        Nombre: "Iniciar sesion",
        Orientacion: "Derecha"
    }

]
module.exports = class {
    constructor(ServidorHttps, Servidorhttp) {
        
        ServidorHttps.get('/Linksvalidos', function (reqA, resA) {
            resA.setHeader('content-type', 'application/json');
            resA.send(LinksValidos);
        });
    }
}
