 Descripcion del Problema
 El objetivo es desarrollar una funcion validarPassword(password, usernameOpcional) que valide la seguridad de una contrasena basandose en una serie de reglas tecnicas, retornando un objeto con el estado de la validacion y una lista de mensajes descriptivos por cada regla incumplida. 
 
 Tecnologias y MetodologiaLenguaje:
    JavaScript (Node.js).
    Framework de Testing: Jest. 
        Instalacion: npm install
        Ejecucion: npm test
    Metodologia: TDD (Rojo -> Verde -> Refactor).

Decisiones de Diseno y Supuestos
    Patron de Reglas: Se utilizo un array de objetos para definir las reglas, permitiendo que el sistema sea escalable y facil de mantener.
    Simbolos Especiales: Se consideran simbolos especiales los siguientes caracteres: !@#$%^&*(),.?":{}|<>.
    Normalizacion: Para la validacion del nombre de usuario, ambos strings se convierten a minúsculas antes de comparar.