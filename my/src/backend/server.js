const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3007; 

const db = mysql.createConnection({
  host: 'localhost::3307',      
  user: 'tu_usuario',     
  password: 'NewRules60!',
  database: 'Formulario', 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});


app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
