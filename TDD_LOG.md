# TDD_LOG – Trabajo Práctico Validador de Contraseñas
## Datos del estudiante
- Nombre y apellido:
- Fecha:
- Curso/Grupo:
---
## Registro de ciclos TDD
> Complete al menos 15 ciclos.
> Puede agregar más filas si lo necesita.
| Ciclo | Test agregado (nombre y objetivo) | Evidencia Rojo (error/salida) | Cambio mínimo aplicado (Verde) | Refactor realizado (o “No aplicó”) | Evidencia final (tests en verde) |
|------:|-----------------------------------|--------------------------------|----------------------------------|-------------------------------------|---------------------------------|
| 1 | Validar estructura de retorno | validarPassword is not defined | Cree la funcion | No aplico | Tests: 1 passed, 1 total |
| 2 | Ciclo 2 |  |  | No | Tests: 2 passed, 2 total |
| 3 | Ciclo 3 | Expected: true, Received: False | Validacion de longitud | No | Tests: 3 passed, 3 total |
| 4 | Ciclo 4 | expect(resultado.esValida).toBe(false) | Validacion de mayuscula | Cambios en la funcion para poder hacer escalables los requerimientos |Tests: 4 passed, 4 total |
| 5 | Ciclo 5 | expect(resultado.esValida).toBe(false) | Implementacion de minuscula | no | Tests:       5 passed, 5 total |
| 6 | Ciclo 6 | const resultado = validarPassword('aANSJADNJKNADSJ') | Implementacion de regla de 1 numero | no | Tests:       6 passed, 6 total |
| 7 | Ciclo 7 | const resultado = validarPassword('aANSJADNJKNADSJ1') | Implementacion de regla de simbolos especiales | no | Tests:       7 passed, 7 total |
| 8 | Cilo 8 | const resultado = validarPassword('aANSJADNJKNADSJ1 ') | Implementacion de regla de espacios | no | Tests:       8 passed, 8 total |
| 9 | Ciclo 9 | const resultado = validarPassword('Tiago12345!', 'tiago') |  | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |
---
## Reflexión breve final
1. ¿Qué regla le resultó más compleja y por qué?
2. ¿En qué momento debió reducir el tamaño de sus iteraciones?
3. ¿Qué refactor mejoró más la claridad de su código?