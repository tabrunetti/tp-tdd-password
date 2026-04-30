# IA_REPORTE – Trabajo Práctico Validador de Contraseñas
## Datos del estudiante
- Nombre y apellido: Tiago Abel Brunetti
- Fecha: 29/04/2026
- Curso/Grupo: POO2
---
## 1) Declaración de uso de IA
Marque una opción:
- [ ] No utilicé herramientas de IA generativa para producir código
en este trabajo.
- [X] Sí utilicé herramientas de IA generativa para producir o
sugerir código en este trabajo.
Si marcó “Sí”, complete las secciones 2 a 6.
---
## 2) Herramientas utilizadas
- Herramienta(s): Gemini
- Versión/modelo (si aplica): pro
- Uso principal (idea, tests, refactor, implementación, etc.): seteo de github y vscode, consulta de reglas de caracteres
---
## 3) Prompts principales utilizados
### Prompt 1
- Objetivo: Crear reglas para la funcion
- Texto del prompt: No contiene 3 caracteres iguales consecutivos (por ejemplo: aaa, 111, %%%)
- Resumen de la respuesta: cumple: (p) => !/(.)\1{2,}/.test(p)
---
## 4) Errores detectados en sugerencias de IA
- Genera respuestas con "if" lo que no esta permitido en la catedra
- Utiliza caracteres en espanol como la "ñ" o caracteres con tilde, que no uso para codigo
---
## 5) Impacto en su proceso TDD
- ¿La IA lo ayudó a iterar mejor o peor?
    Mejor
- ¿En qué parte interfirió con la granularidad del proceso?
    No interfirio, le pido soluciones muy especificas, en este caso las reglas de caracteres
- ¿Qué decisión tomó que fue distinta a la recomendada por IA?
    Uso de if
---
## 6) Conclusión personal (breve)
- ¿Qué aprendizaje se lleva sobre uso responsable de IA en desarrollo guiado por tests?
    Es muy importante ser critico con los test y el funcionamiento de los programas, la IA se salta criterios que hacen que un codigo tenga las funciones bien distribuidas y que sea escalable a futuro, la IA resuelve un problema en general, pero cuando a eso le sumas el segundo muchas veces hay que borrar y iniciar de 0.