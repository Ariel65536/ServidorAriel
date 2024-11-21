const util = require('./util');
const chalk = require('chalk');
const bodyParser = require('body-parser');

class seguridad {
    HostValidos = [
        "ariel65536.ddns.net",
        "ariel65536.ddns.net:29767",
        "localhost:7000",
        "localhost:7001",
        "192.168.0.100:7000",
        "192.168.0.100:7001",
        "127.0.0.1:7000",
        "127.0.0.1:7001",
        "192.168.0.2:7000",
        "192.168.0.2:7001"
    ]
    static configurarServidor(app) {
        app.use((req, res, next) => {
            let PuedePasar = false;
            for (let i = 0; i < HostValidos.length; i++) {
                if (req.headers.host?.indexOf(HostValidos[i]) != -1) {
                    PuedePasar = true;
                    break;
                }
            }

            if (PuedePasar) {
                next();
            } else {
                util.consola(chalk.red, "Express", "Solicitud rechazada", req.headers.host + req.url);
            }
        });

        // Asigna Idioma español por defecto
        app.use(function (req, res, next) {
            res.set('content-language', 'es-ES');
            res.set('Access-Control-Allow-Origin', '*');

            next();
        });

        // Desactiva mostrar que se usa Express
        app.disable('x-powered-by');

        // Procesa un body para decodificar un JSON
        app.use(bodyParser.json());

        // Procesa un body para decodificar un urlencoded
        app.use(bodyParser.urlencoded({ extended: true }));
    }
}

module.exports = seguridad;