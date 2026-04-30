function validarPassword(password, usernameOpcional) {
    const reglas = [
        {
            cumple: (p) => p.length >= 8,
            mensaje: 'La contrasena debe tener al menos 8 caracteres'
        },
        {
            cumple: (p) => /[A-Z]/.test(p),
            mensaje: 'La contrasena debe contener al menos 1 letra mayuscula'
        },
        {
            cumple: (p) => /[a-z]/.test(p),
            mensaje: 'La contrasena debe contener al menos 1 letra minuscula'
        },
       {
            cumple: (p) => /\d/.test(p), 
            mensaje: 'La contrasena debe contener al menos 1 numero'
        },
        {
            cumple: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p),
            mensaje: 'La contrasena debe contener al menos 1 simbolo especial'
        },
        {
            cumple: (p) => !p.includes(' '),
            mensaje: 'La contrasena no debe contener espacios en blanco'
        },
        {
            cumple: (p) => {
                if (!usernameOpcional) return true; 
                return !p.toLowerCase().includes(usernameOpcional.toLowerCase());
            },
            mensaje: 'La contrasena no puede incluir el nombre de usuario'
        }
    ];

    const errores = reglas.filter(regla => !regla.cumple(password)).map(regla => regla.mensaje);

    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = { validarPassword };