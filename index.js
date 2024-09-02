const express = require('express');
const app = express();
const PORT = 3000;

//rray de objtos para recorrerlo.
let usuarios = [
  {id: 1, nombre: 'Ryu'}
  {id: 2, nombre: 'Ken'}
  {id: 3, nombre: 'Guile'}
]

app.get('/', (req, res) => {
  res.send('hola');
})

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});