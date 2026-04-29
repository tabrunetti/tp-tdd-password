function validarPassword(password, usernameOpcional) {
    const errores = [];

    if (password.length < 8) {
        errores.push('La contraseña 8 o mas caracteres');
    }

    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = { validarPassword };