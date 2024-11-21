const express = require('express');
const https = require('https');
const util = require("./util/util");
const certificado = require("./util/certificado");
const seguridad = require("./util/seguridad");
const chalk = require('chalk');
const fs = require('fs');



console.log("\n\n-------------------------------------------------------------------------------------");
util.consola(chalk.green, "Servidor", "Inicio", "Correcto");

//Inicio de servidor HTTP
var ServidorHttp = express();
ServidorHttp.listen(7001, function () { util.consola(chalk.green, "Servidor", "HTTP", "Iniciado en 7001"); });
seguridad.configurarServidor(ServidorHttp);

//Inicio de servidor HTTPS
var ServidorHttps = express();
https.createServer({
    key: certificado.obtenerKey(),
    cert: certificado.obtenerCert()
}, ServidorHttps).listen(7000, function () { util.consola(chalk.green, "Servidor", "HTTPS", "Iniciado en 7000"); });
seguridad.configurarServidor(ServidorHttps);

//Componente autenticador, comun a todos los otros componentes
const Autenticador = new (require("./autenticador"))(ServidorHttps);

//Inicio de Componentes
fs.readdirSync("./Componentes/").forEach(file => {
    util.consola(chalk.gray, "Servidor", "Cargando .js", file.replace(".js", ""));;
    new (require("./Componentes/" + file.replace(".js", "")))(ServidorHttps, ServidorHttp, Autenticador);
});

ServidorHttp.use((req, res, next) => util.consola(chalk.gray, "Express HTTP", "Ruta no encontrada", 'http://' + req.headers.host + req.url))
ServidorHttps.use((req, res, next) => util.consola(chalk.gray, "Express HTTPS", "Ruta no encontrada", 'https://' + req.headers.host + req.url));