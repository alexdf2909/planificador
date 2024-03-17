# Planificador
Planificador de actividades con HTML, CSS y JS
## Idea
Un planificador tipo calendario mensual, semanal y diario
## Funciones
- Seleccionar modo vista mensual, semanal y diario
- Agregar actividad
  - Nombre
  - Grupo 
  - Repetición: diario, personalizado, único (automatico)
  - Desplazamiento: checkbox para activar
    - Agrega un bloque gris de desplazamiento
    - Ingresar duración *hh:mm* inicial debe agregar uno o los dos
    - Ingresar duración *hh:mm* final debe agregar uno o los dos
  - Seleccionar color especifico
  - Fijo: checkbox
    - Si (automatico)
      - Seleccionar horario de inicio y fin *hh:mm*
    - No
      - Tiempo de duración: *hh:mm*
      - Dividir: checkbox (se puede dividir en multiples horarios)
      - Fecha de limite: checkbox para activar (lo puede organizar para otro día)(solo si es unico)
      - Antecedente: checkbox para activar (tiene que cumplir esa actividad antes)
        
- Borrar actividades
- Editar actividades
- Organizar cada vez que se agregue una nueva actividad
- Bloquear periodo o dia  (no permite nuevas actividades): mueve bloque transparentoso
- Modo edición botón
  - Permite arrastrar los TO DO a otros espacios de tiempo
  - Permite fijar TO DO
  - Permite llevarlos a cuadro exterior (para permitir mayor movilidad)
## ¿Cómo hacerlo?
Ni idea, pero está pensado utilizar solo HTML, CSS, JS y block de notas para guardar los datos
1. Especificar mejor funciones, se creará un apartado para cada una
2. Hacer figma
3. Armar html
4. JS 
5. CSS
    1. ¿Grid? jamás se ha utilizado
