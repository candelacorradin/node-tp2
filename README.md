# API REST de Libros con Express

API REST sencilla hecha con Node.js y Express que expone un CRUD de libros. Los datos se guardan en memoria, así que se reinician cada vez que se levanta el servidor.

## Instalación y ejecución

```bash
git clone https://github.com/candelacorradin/node-tp2.git
cd node-tp2
npm install
node server.js
```

El servidor queda escuchando en `http://localhost:3000`.

## Rutas

| Método | Ruta          | Descripción                |
| ------ | ------------- | -------------------------- |
| GET    | `/`           | Mensaje de bienvenida      |
| GET    | `/libros`     | Lista todos los libros     |
| GET    | `/libros/:id` | Devuelve un libro por ID   |
| POST   | `/libros`     | Crea un libro              |
| PUT    | `/libros/:id` | Edita un libro             |
| DELETE | `/libros/:id` | Elimina un libro           |

Ejemplo de body para `POST` / `PUT`:

```json
{
  "titulo": "Martín Fierro",
  "autor": "José Hernández",
  "anio": 1872
}
```

## Pruebas con Postman

La colección está en `postman_collection.json` (se importa desde Postman con **Import**). Incluye las 6 solicitudes con tests que validan el status y el contenido de cada respuesta.

Las capturas de las pruebas están en la carpeta [`capturas/`](./capturas):

| Solicitud | Captura |
| --------- | ------- |
| GET `/` | ![GET /](capturas/01-get-bienvenida.png) |
| GET `/libros` | ![GET /libros](capturas/02-get-listar-libros.png) |
| GET `/libros/:id` | ![GET /libros/:id](capturas/03-get-obtener-libro.png) |
| POST `/libros` | ![POST /libros](capturas/04-post-crear-libro.png) |
| PUT `/libros/:id` | ![PUT /libros/:id](capturas/05-put-editar-libro.png) |
| DELETE `/libros/:id` | ![DELETE /libros/:id](capturas/06-delete-eliminar-libro.png) |
| Resumen de la ejecución | ![Resumen](capturas/07-resumen-ejecucion.png) |

## Autora

- **Estudiante:** Candela Corradin
- **Curso:** Diplomatura Full Stack — Centro de e-Learning UTN BA
- **Unidad:** Módulo 1 - Unidad 2 · Mi primera API REST con Express
