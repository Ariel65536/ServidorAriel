
const chalk = require('chalk');

class util {
    static consola(Color, Origen, Accion, Detalles) {
        console.log(chalk.gray(util.obtenerFechaHora()) + " | " + chalk.bold(util.completarConEspacios(Origen, 19)) + " | " + Color(util.completarConEspacios(Accion, 17)) + " | " + Detalles);
    }
    static obtenerFechaHora(Milisegundos) {
        var Fecha = new Date(Milisegundos != null ? Milisegundos : Date.now());
        var FechaMostrar = Fecha.getFullYear() + "/";
        FechaMostrar += this.completarConCeros(Fecha.getMonth() + 1, 2) + "/";
        FechaMostrar += this.completarConCeros(Fecha.getDate(), 2) + " ";
        FechaMostrar += this.completarConCeros(Fecha.getHours(), 2) + ":";
        FechaMostrar += this.completarConCeros(Fecha.getMinutes(), 2) + ":";
        FechaMostrar += this.completarConCeros(Fecha.getSeconds(), 2);
        return FechaMostrar;
    }
    static obtenerFechaHoraB(Milisegundos) {
        var Fecha = new Date(Milisegundos != null ? Milisegundos : Date.now());
        var FechaMostrar = Fecha.getFullYear() + "-";
        FechaMostrar += this.completarConCeros(Fecha.getMonth() + 1, 2) + "-";
        FechaMostrar += this.completarConCeros(Fecha.getDate(), 2) + " ";
        FechaMostrar += this.completarConCeros(Fecha.getHours(), 2) + "-";
        FechaMostrar += this.completarConCeros(Fecha.getMinutes(), 2) + "-";
        FechaMostrar += this.completarConCeros(Fecha.getSeconds(), 2) + " ";
        FechaMostrar += this.completarConCeros(Fecha.getMilliseconds(), 2);
        return FechaMostrar;
    }

    static completarConCeros(Texto, Cantidad) {
        var Respuesta = new String(Texto);
        while (Respuesta.length < Cantidad) {
            Respuesta = "0" + Respuesta;
        }
        return Respuesta;
    }

    static completarConEspacios(Texto, Cantidad) {
        var Respuesta = new String(Texto);
        let Principio = false;
        while (Respuesta.length < Cantidad) {
            if (Principio) {
                Respuesta = " " + Respuesta;
            } else {
                Respuesta = Respuesta + " ";
            }
            Principio = !Principio;
        }
        return Respuesta;
    }

    static generarClave(longitud) {
        var key = {
            'i': 'w',
            'l': 'x',
            'o': 'y',
            'u': 'z'
        };
        var Clave = "";
        while (Clave.length < longitud) {
            Clave += Math.floor(Math.random() * 1e9).toString(32).replace(/[ilou]/, function (a) { return key[a]; });
        }
        return Clave.substring(0, longitud).toUpperCase();
    }

    static formatearTamano(Tamano, DigitosComa) {
        let Respuesta = "";
        let Unidad = 0;
        let Unidades = ["B", "KB", "MB", "GB", "TB", "PB"];
        while (Tamano > 1024.0) {
            Tamano = Tamano / 1024.0;
            Unidad++;
        }
        Respuesta = Tamano.toFixed(DigitosComa) + Unidades[Unidad];
        return Respuesta;
    }
}

module.exports = util;