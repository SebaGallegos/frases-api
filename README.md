# Proyecto de API de frases aleatorias

Este repositorio es un proyecto pequeño sobre una API que devuelve frases aleatorias.

## Características

- La API devuelve una frase aleatoria en formato JSON.
- La frase se selecciona de un conjunto predefinido que se carga desde un Gist al iniciar la aplicación.

## Instalación

1. Clona el repositorio.

2. Instala las dependencias del proyecto (primero asegurate de tener Node.js instalado):

    ```bash
    npm install
    ```

3. Configuración de variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto (o renombra la plantilla `.env.example` a `.env`) y añade la siguiente variable:
    ```plaintext
    FRASES_URL=https://gist.githubusercontent.com/<usuario>/<gistid>/raw/<nombre_archivo>.json
    ```

4. Crear un Gist (puede ser privado) con un archivo JSON que contenga un array de frases. Por ejemplo:

    ```json
    [
        "Esta es una frase.",
        "Esta es otra frase.",
        "No sé que más colocar acá, tercera frase."
    ]
    ```

    La url del Gist se obtiene desde la opción "Raw" del Gist en GitHub, si la url tiene este formato:
    ```
    https://gist.githubusercontent.com/<usuario>/<gistid>/raw/<hash>/<nombre_archivo>.json
    ```

    Debes eliminar el `<hash>` de la URL para que quede así:
    ```
    https://gist.githubusercontent.com/<usuario>/<gistid>/raw/<nombre_archivo>.json
    ```

## Uso

1. Iniciar la aplicación:
    ```bash
    npm run dev     # Para la utilización de nodemon
    npm run start   # Para iniciar la aplicación sin nodemon
    ```

2. Desde un cliente para realizar peticiones (Como Postman o Bruno), realiza una petición GET a la ruta `/` de la API. Por ejemplo:

    ```
    http://localhost:3000/
    ```

    La respuesta será un objeto JSON con una frase aleatoria, por ejemplo:

    ```json
    {
        "message": "Esta es una frase."
    }
    ```

    Si por el contrario no se pueden cargar las frases desde el Gist, la respuesta será:

    ```json
    {
        "message": "Ups, no se pudieron cargar las frases."
    }
    ```
