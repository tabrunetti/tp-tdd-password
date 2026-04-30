 Descripcion del Problema<br>
 El objetivo es desarrollar una funcion validarPassword(password, usernameOpcional) que valide la seguridad de una contrasena basandose en una serie de reglas tecnicas, retornando un objeto con el estado de la validacion y una lista de mensajes descriptivos por cada regla incumplida. 
 
 Tecnologias y MetodologiaLenguaje:<br>
    JavaScript (Node.js).<br>
    Framework de Testing: Jest.<br> 
        Instalacion: npm install<br>
        Ejecucion: npm test<br>
    Metodologia: TDD (Rojo -> Verde -> Refactor).<br>
    npm test -- --coverage: 100%<br>

Decisiones de Diseno y Supuestos<br>
    Patron de Reglas: Se utilizo un array de objetos para definir las reglas, permitiendo que el sistema sea escalable y facil de mantener.<br>
    Simbolos Especiales: Se consideran simbolos especiales los siguientes caracteres: !@#$%^&*(),.?":{}|<>.<br>
    Normalizacion: Para la validacion del nombre de usuario, ambos strings se convierten a minúsculas antes de comparar.<br>