# TDD_LOG – Trabajo Práctico Validador de Contraseñas
## Datos del estudiante
- Nombre y apellido: Tiago Abel Brunetti
- Fecha: 29/04/2026
- Curso/Grupo: POO2
---
## Registro de ciclos TDD
| Ciclo | Test agregado (nombre y objetivo) | Evidencia Rojo (error/salida) | Cambio mínimo aplicado (Verde) | Refactor realizado (o “No aplicó”) | Evidencia final (tests en verde) |
|------:|-----------------------------------|--------------------------------|----------------------------------|-------------------------------------|---------------------------------|
| 1 | Validar estructura de retorno | validarPassword is not defined | Cree la funcion | No aplico | Tests: 1 passed, 1 total |
| 2 | Tiene al menos 8 caracteres |  |  | No | Tests: 2 passed, 2 total |
| 3 | Tiene al menos 8 caracteres | Expected: true, Received: False | Validacion de longitud | No | Tests: 3 passed, 3 total |
| 4 | Tiene al menos 1 mayuscula | expect(resultado.esValida).toBe(false) | Validacion de mayuscula | Cambios en la funcion para poder hacer escalables los requerimientos |Tests: 4 passed, 4 total |
| 5 | tiene al menos 1 minuscula | expect(resultado.esValida).toBe(false) | Implementacion de minuscula | no | Tests:       5 passed, 5 total |
| 6 | tiene al menos 1 numero | const resultado = validarPassword('aANSJADNJKNADSJ') | Implementacion de regla de 1 numero | no | Tests:       6 passed, 6 total |
| 7 |  tiene al menos 1 simbolo especial | const resultado = validarPassword('aANSJADNJKNADSJ1') | Implementacion de regla de simbolos especiales | no | Tests:       7 passed, 7 total |
| 8 | Sin espacios en blanco | const resultado = validarPassword('aANSJADNJKNADSJ1 ') | Implementacion de regla de espacios | no | Tests:       8 passed, 8 total |
| 9 | No incluir username | const resultado = validarPassword('Tiago12345!', 'tiago') | Implementacion de regla de no user en pass | no | Tests:       9 passed, 9 total |
| 10 | No incluir username | | | no | Tests:       10 passed, 10 total |
| 11 | No caracteres consecutivos | const resultado = validarPassword('Abc111!def'); expect(resultado.esValida).toBe(false); expect(resultado.errores).toContain('La contrasena no puede contener 3 caracteres iguales consecutivos') | Implementacion de regla de caracteres consecutivos | no | Tests:       11 passed, 11 total |

---
## Reflexión breve final
1. ¿Qué regla le resultó más compleja y por qué?
    La segunda, porque tuve que ver como validar caracteres especificos
2. ¿En qué momento debió reducir el tamaño de sus iteraciones?
    Para reglas mas complejas tuve que usar mas de un test para verificar
3. ¿Qué refactor mejoró más la claridad de su código?
    En la segunda regla me di cuenta que tenia que tener muchas condiciones en adelante, asi que refactorize el codigo para poder escalarlo mejor a futuro, derivando las funciones dentro de un contenedor de reglas a cumplir