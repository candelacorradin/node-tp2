const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Datos en memoria (se reinician al reiniciar el servidor)
let libros = [
  { id: 1, titulo: 'Rayuela', autor: 'Julio Cortázar', anio: 1963 },
  { id: 2, titulo: 'Ficciones', autor: 'Jorge Luis Borges', anio: 1944 },
  { id: 3, titulo: 'El túnel', autor: 'Ernesto Sabato', anio: 1948 },
];
let siguienteId = 4;

const buscarLibro = (id) => libros.find((libro) => libro.id === Number(id));

// GET / → mensaje de bienvenida
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenidos a la API de libros' });
});

// GET /libros → todos los libros
app.get('/libros', (req, res) => {
  res.json(libros);
});

// GET /libros/:id → un libro por ID
app.get('/libros/:id', (req, res) => {
  const libro = buscarLibro(req.params.id);
  if (!libro) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }
  res.json(libro);
});

// POST /libros → crear un libro
app.post('/libros', (req, res) => {
  const { titulo, autor, anio } = req.body ?? {};
  if (!titulo || !autor) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: titulo y autor' });
  }
  const nuevo = { id: siguienteId++, titulo, autor, anio };
  libros.push(nuevo);
  res.status(201).json({ mensaje: 'Libro creado', libro: nuevo });
});

// PUT /libros/:id → editar un libro
app.put('/libros/:id', (req, res) => {
  const libro = buscarLibro(req.params.id);
  if (!libro) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }
  const { titulo, autor, anio } = req.body ?? {};
  if (titulo !== undefined) libro.titulo = titulo;
  if (autor !== undefined) libro.autor = autor;
  if (anio !== undefined) libro.anio = anio;
  res.json({ mensaje: 'Libro actualizado', libro });
});

// DELETE /libros/:id → eliminar un libro
app.delete('/libros/:id', (req, res) => {
  const libro = buscarLibro(req.params.id);
  if (!libro) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }
  libros = libros.filter((l) => l.id !== libro.id);
  res.json({ mensaje: 'Libro eliminado', libro });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
