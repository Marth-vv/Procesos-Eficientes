## Procesos-Eficientes
### Prueba de conocimientos
 El proyecto presentado es una solución para el prblema de un cliente que quiere trasladar su información de hojas de papel
 a un programa digital. La información que el cliente maneja en flotilla de vehículos es la siguiente:

- Marca
- Modelo
- Año
- Placa
- Estado 

La plataforma tiene el fin de optimidar las operaciones que el cliente maneja diariamente, tales como buscar y leer, guardar, corregir 
y eliminar la información de su flotilla.

### Levantar un ambiente local y base de datos
En código del proyecto cuenta con documentación pasos a paso de lo realizado dentro de la aplicación con el fin de hacer más fácil la 
lectura de la misma y entender el código.

Inicialmente es necesario tener corriendo la base de datos para que al momento de ejecutar la aplicación tengamos una conexión exitosa.
En los archivos del proyecto se puede encontrar guardada la base de datos que ya contiene la tabla y los campos que la aplicación nece-
sita para funcionar correctamente. 

La base de datos está guradad bajo el nombre *DATABASE ExamPE* el primer paso es abrir la base de datos en MySQL o bien desde consola
para ejecutar el comando *CREATE DATABASE* y el comando *CREAT TABLE* que ya se encuentran en la base de datos. Ya que sin esto la ap- 
licación no reconocerá la base datos con la que debe trabajar.

En la base de datos también se encuentra en forma de comentario otros comandos para crear, leer, editar y eliminar datos a la tabla de
forma manual en caso de necesitarse.

Una vez teniendo creada la base de datos con la tabla que necesitamos, podemos abrir  el programa en un Entorno de Desarrollo por ejemplo 
Visual Studio Code que es el que utilicé para crear la aplicación. En el archivo **packege.json** se pueden observar las dependencias 
utilizadas y un Script que nos indica la forma de ejecutar facilmente la aplicación. El comando es **npm run start** una vez ejecutado
este comando podremos ver un mensaje que nos indica en número de puerto en el que está corriendo nuestro servidor y en mensaje que nos
indica que la conexión a la base de datos fue exitosa.

El servidor de la aplicación se ejecuta en el puerto 3000, por lo cual para probar las peticiones de CRUD se debe utilizar la dirección
de ese puerto: *http:/localhost/* seguido del slash se utiliza el comando de la operación que se desea utilizar; Por ejemplo
*http:/localhost/insert*.

### Competencias del proyecto

Los requerimientos escenciales de la aplicación son los siguientes: 

- Una aplicación web visual
- Instrucciones para levantar un ambiente local de desarrollo
- Instrucciones de como levantar la aplicación
- Schema de base de datos
- Requerimientos opcionales

Los cuales fueron realizados exitosamente; Además, también fueron propuestos de forma opcional los siguientes requerimientos:

- Una interfaz de usuario atractiva 
- Instrucciones para levantar la base de datos 
- Una pantalla de login y un administrador de usuarios 
- Que el campo de la placa solo permita ingresar numeros de placa validas ( "P-ABC123" o "O- ZXY987") 
- Dockerizar la aplicación 

Requerimientos que fueron realizados pero sin embargo no completados por lo cual decidí no incorporarlos en la versión final del proyecto
para no ensuciar de documentación inutil la versión final del proyecto presentado.
