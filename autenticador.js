const { Client } = require('pg');
const util = require("./util/util");
const chalk = require('chalk');

class autenticador {
    BaseDatos;
    constructor(ServidorHttps, ServidorHttp, BaseDatos) {
        this.BaseDatos = BaseDatos;
    }

    async configurar() {
        try {
            if (await this.BaseDatos.existeTabla("usuarios")) {
                console.log("Base de datos Usuarios ya existe");
            } else {
                console.log("Base de datos Usuarios no existe, creando...");
                await this.BaseDatos.crearTabla("usuarios");
            }
            util.consola(chalk.green, "Autenticador", "Inicio", "Tabla de usuarios verificada");

        } catch (error) {
            util.consola(chalk.red, "Autenticador", "Error", "Algo paso al crear tabla usuarios");
            console.log(error);
        }
    }

    agregarUsuario(Nombre, Contrasena, Permisos){
       
    }
}

module.exports = autenticador;