

# Geography Quiz

Este es un cuestionario interactivo (Quiz) de geografía que muestra preguntas con opciones múltiples obtenidas a través de la API de [Open Trivia Database](https://opentdb.com/). El objetivo es responder las preguntas correctamente y obtener una puntuación final al final del cuestionario.

## Descripción

El proyecto consiste en una aplicación de una sola página (SPA) que presenta 10 preguntas de geografía, cada una con 4 opciones de respuesta. Solo una opción es correcta. Después de completar todas las preguntas, el usuario puede ver cuántas respuestas correctas e incorrectas ha seleccionado.

### Características

- **Preguntas de geografía**: Las preguntas se obtienen dinámicamente a través de la API de Open Trivia Database.
- **Respuestas correctas e incorrectas**: El sistema cuenta las respuestas correctas e incorrectas.
- **Interactividad**: El usuario puede responder a las preguntas, ver las respuestas correctas e incorrectas y obtener un puntaje final.
- **Funcionalidad de reinicio**: Al finalizar, el usuario puede reiniciar el cuestionario.

---

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **HTML**: Para estructurar la página.
- **CSS**: Para el diseño y estilo de la página.
- **JavaScript**: Para la lógica de interacción, manejo de eventos y comunicación con la API.
- **Axios**: Para realizar peticiones HTTP a la API.
- **API de Open Trivia Database**: Para obtener las preguntas del cuestionario.

---

## Instalación

Para ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/geography-quiz.git
   ```

2. **Navegar a la carpeta del proyecto:**

   ```bash
   cd geography-quiz
   ```

3. **Abrir el archivo `index.html` en tu navegador:**

   Puedes abrir el archivo directamente en tu navegador o usar un servidor local si prefieres.

---

## Uso

1. **Comenzar el cuestionario:**
   Haz clic en el botón **"Empezar"** para comenzar el cuestionario.
   
2. **Responder a las preguntas:**
   Después de que se muestre una pregunta, haz clic en la respuesta correcta. El sistema te indicará si la respuesta es correcta o incorrecta.

3. **Siguiente pregunta:**
   Después de responder una pregunta, haz clic en **"Siguiente"** para continuar con la siguiente pregunta.

4. **Ver los resultados:**
   Al final del cuestionario, se mostrarán los resultados, que incluyen cuántas respuestas fueron correctas e incorrectas.

5. **Reiniciar el cuestionario:**
   Si deseas reiniciar el cuestionario, haz clic en **"Reiniciar"** para volver a empezar desde la primera pregunta.

---

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
geography-quiz/
│
├── index.html         # Página principal
├── styles.css         # Estilos del proyecto
├── main.js            # Lógica de JavaScript
├── README.md          # Este archivo
└── assets/             # Imágenes o recursos adicionales
```

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, puedes hacerlo a través de un **pull request**.

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b mi-nueva-rama`).
3. Realiza los cambios y haz commit (`git commit -am 'Agregué una nueva característica'`).
4. Sube tus cambios a tu fork (`git push origin mi-nueva-rama`).
5. Crea un pull request desde tu fork a este repositorio.

---

## Créditos

- **API de Open Trivia Database**: Utilizada para obtener las preguntas del cuestionario. [https://opentdb.com/](https://opentdb.com/)
- **Axios**: Librería para realizar peticiones HTTP. [https://axios-http.com/](https://axios-http.com/)

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por usar este quiz!