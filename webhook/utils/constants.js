module.exports = Object.freeze({
    regex: {
        alphaNumSpecial: '^([a-zA-Z0-9áéíóúÁÉÍÓÚ\u00f1\u00d1!@#$&()\\_\-\`.+,/?¿|°=¡!\u0026\"](\u0020[a-zA-Z0-9áéíóúÁÉÍÓÚ\u00f1\u00d1!@#$&()\\_\-\`.+,/?¿|°=¡!\u0026\"])*)+$',
        point: /^(\()([-+]?)?(?:90(?:(?:\.0{1,15})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})(,)?))(\s*)([-+]?)?(?:180(?:(?:\.0{1,15})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))(\))$/
    }
})