//***********  CRUD DE LA TABLA VEHICULO *************************

const express = require("express");
const app = express();
const { Connection } = require("mongoose");
const mysql = require("mysql");

app.use(express.json());


// ---------------- Agregar registros a la tabla ----------------  *

function insert(connection, data, callback){
    let insertQuery = "INSERT INTO vehiculo (IdVehiculo, Marca, Modelo, Anio, Placa, Estado) VALUES(?, ?, ?, ?, ?, ?)" 
    let query = mysql.format(insertQuery, [data.IdVehiculo, data.Marca, data.Modelo, data.Anio, data.Placa, data.Estado]);
    connection.query(query, function(err, result){
        if(err) throw err;
        callback(result);
    });
};

// ---------------- Ver los registros de la tabla ----------------  *

function read(connection, callback){
    connection.query("SELECT * FROM vehiculo", function(err, result){
        if(err) throw err;
        callback(result);
    });
}

// ---------------- Editar un dato de un registro ----------------  *

function update (connection, data, callback){
    const newMarca = "MarcaEjemplo"
    const newModelo = "ModeloEjemplo"
    const newAnio = "2022"
    const newPlaca = "P0-147QWE"
    const newEstado = "Urgente"
    let updateQuery = "UPDATE vehiculo SET  Marca = ?, Modelo = ?, Anio = ?, Placa = ?, Estado = ? WHERE IdVehiculo = ?"
    let query = mysql.format(updateQuery, [ newMarca, newModelo, newAnio, newPlaca, newEstado, data.id]);

    connection.query(query, function(err, result){
        if(err) throw err;
        callback(result);
    })
}

// ---------------- Eliminar un registros ----------------  *

function remove (connection, data, callback){
    let removeQuery = "DELETE FROM vehiculo WHERE IdVehiculo = ?"
    let query = mysql.format(removeQuery, [data.id]);

    connection.query(query, function(err, result){
        if(err) throw err;
        callback(result);
    });
}


module.exports = {insert, read, update, remove };