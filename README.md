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

### Levantar un ambiente local
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
