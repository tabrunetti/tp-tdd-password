function validarPassword(password, usernameOpcional) {
    const reglas = [
        {
            cumple: (p) => p.length >= 8,
            mensaje: 'La contraseña debe tener al menos 8 caracteres'
        },
        {
            cumple: (p) => /[A-Z]/.test(p),
            mensaje: 'La contraseña debe contener al menos 1 letra mayúscula'
        }
    ];

    const errores = reglas.filter(regla => !regla.cumple(password)).map(regla => regla.mensaje);

    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = { validarPassword };