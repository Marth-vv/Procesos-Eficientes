CREATE DATABASE dbexampe;

USE dbexampe;

CREATE TABLE vehiculo (
IdVehiculo int primary key not null auto_increment,
Marca varchar (20) not null,
Modelo varchar (20) not null,
Anio int not null,
Placa varchar (9) not null,
Estado  varchar (20) not null
);

/*
CREATE TABLE usuario (
IdUser int primary key not null auto_increment,
nombre varchar (20) not null,
usuario varchar (20) not null,
pass varchar (20) not null,
rol varchar (15) not null
);
drop table vehiculo;

/*---------- QUITAR EL ASTERISCO PARA AGREGAR REGISTROS ----------------

--Insertar datos a la tabla
INSERT INTO vehiculo (IdVehiculo, Marca, Modelo, Anio,Placa, Estado) VALUES
('01','MarcaDeEjemplo', 'ModeloEjemplo', '2000', 'M0-105GVL', 'Perfecto' ); 

/*
--Select para poder ver los registros de la tabla
SELECT * FROM vehiculo;
SELECT Placa, Marca, Estado FROM vehiculo;

SELECT Placa, Marca, Estado FROM vehiculo WHERE Estado LIKE 'P%';
SELECT Placa, Marca, Estado FROM vehiculo WHERE Estado LIKE 'DA%';
SELECT Placa, Marca, Estado FROM vehiculo WHERE Estado LIKE 'R%';
SELECT Placa, Marca, Estado FROM vehiculo WHERE Estado LIKE 'E%';
SELECT Placa, Marca, Estado FROM vehiculo WHERE Estado LIKE 'D%';

--Editar un registro de una tabla
update vehiculo set Marca = 'Mazda'
    where IdVehiculo = 01;

update vehiculo set Modelo = 'Nuevo Modelo'
    where IdVehiculo = 01;
    
update vehiculo set Anio = '2020'
    where IdVehiculo = 01;
    
update vehiculo set Placa = 'M0-200PLO'
    where IdVehiculo = 01;

update vehiculo set Estado = 'Mazda'
    where IdVehiculo = 01;
    
--Eliminar un registro de una tabla
 delete from vehiculo	where IdVehiculo = 01;
 
 */
    
    