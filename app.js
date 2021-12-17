//--- Importaciones globales ----
const express = require("express");
const app = express();
const mysql = require("mysql");
const {insert, read, update, remove} = require("./src/Functions/function");
// --- Seteo de urlencoded para capturar datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// --- Invocación de paquetes
const dontev = require('dotenv');
dontev.config({path: './app.js'});

// --- Invocación de recursos
app.use('/resources', express.static('app'));
app.use('/resources', express.static(__dirname + 'app'))

/*--------------- Conexión con la Base de datos   -------------*/

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'dbexampe'

})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to database")
});

/*---------------------------  Enrrutamiento  ---------------------------*/


//--------- Ruta de Bienvenida  -------- */
app.get("/", (req, res)=>{
    res.render('index');
   //
});

//--------- Ruta para insertar registros  -------- */

app.get("/insert", (req, res)=>{
    insert(connection, {IdVehiculo: '11', Marca: 'Honda', Modelo: 'Civic', Anio: '2010', Placa: 'P0-654POI', Estado: 'Reparacion'}, result => {
        res.json(result);
    });
});

//---------- Ruta para ver registros  -------- */

app.get("/read", (req, res)=>{
    read(connection, result => {
        res.json(result);
    });
});

//---------- Ruta editar detos de los registros  -------- */

app.get("/update", (req, res)=>{
    update(connection, { id : 2}, result => {
        res.json(result);
    });
});

//---------- Ruta eliminar registros  -------- */

app.get("/remove", (req, res)=>{
    remove(connection, { id : 2}, result => {
        res.json(result);
    });
});



//------------  Ejecución del servidor  ----------------

app.listen(3000, ()=> {
    console.log("El servidor está corriendo en el puerto 3000...")
})