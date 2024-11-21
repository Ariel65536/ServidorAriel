
const fs = require('fs');

class certificado {
    static obtenerNumeroUltimoArchivo(){
        let Archivos = fs.readdirSync(process.env.RUTA_CERTIFICADO);

        let UltimoArchivo = 0;
        for (let i = 0; i < Archivos.length; i++) {
            if (Archivos[i].startsWith("cert")) {
                let Numero = parseInt(Archivos[i].replace("cert", "").replace(".pem", ""));
                UltimoArchivo = Math.max(UltimoArchivo, Numero);
            }
        }
        return UltimoArchivo;
    }
    static obtenerKey() {
        return fs.readFileSync(process.env.RUTA_CERTIFICADO + 'privkey' + this.obtenerNumeroUltimoArchivo() + '.pem');
    }
    static obtenerCert() {
        return fs.readFileSync(process.env.RUTA_CERTIFICADO + 'fullchain' + this.obtenerNumeroUltimoArchivo() + '.pem');
    }
}

module.exports = certificado;