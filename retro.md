19/01/2022

1.	¿"Qué comenzar a hacer"?
Estructura html de la página, y estructura css.

2.	¿"Qué continuar haciendo"?
Continuaremos realizando el trabajo individual de mercado liebre, para aplicar al trabajo en equipo.


24/01/2022

Distribución de actividades para la elaboración de la vista de carrito, vista de registro y vista de login:

Vista de carrito - Sergio 
Vista de Registro -Yanneth
Vista de Login -Guido

La vista de home la realizaremos en equipo, la cual se distribuyó de la siguiente manera:
Home (Vista de home)- Trabajo en equipo
-	Navbar-Guido
-	Carusel de producto -Yanneth
-	Slider y demás estructura del home- Sergio


30/01/2022

Para la entrega del sprint 2, realizaremos las siguientes mejores

Agregar botón de compra
Agregar carrusel de imágenes
Mejorar contenedor de producto


12/01/2022

Entrega de spring 3. 

1.	Ajustar el proyecto a la arquitectura interna MVC
2.	Cambiar la extensión de los html y hacerlos. ejs
3.	Crear en views las carpetas products y users.
4.	Crear los controladores correspondientes para cada vista en controllers y crear las rutas correspondientes en routes
5.	Crear y editar formularios de productos 

15/02/2022

Pendiente ajustar css de los formularios.

23-feb-2022
Sprint 4

Reunión de retrospectiva
La realización de CRUD (JSON y HTTP Methods) en el proyecto, se realizará de manera grupal.
El archivo de productos basado en el modelo de archivos JSON, contendrá: id, nombre del producto, descripción, precio, descuento, imagen, categoría
El archivo de usuarios (en formato JSON). Contendrá los datos de id, nombre, apellido, email, password, telefono, imagen
Ver clase de CRUD y la siguiente reunión se realizará el 26 de febrero

23-feb-2022
El CRUD de producto se Genera de la siguiente forma:
Se crean las siguientes rutas:
•	/ —> Vista del home
•	/ products/vitrina_productos (GET) —> Vista de Listado de productos
•	/ products/crear_producto (GET) —> Formulario de creación de productos
•	/products/detalle_producto/:id (GET) —> Vista de Detalle de un producto particular
•	/products/ crear_producto (POST) —> Acción de creación (almacenamiento de producto luego de creación)
•	/products/editar_producto/:id (GET) —> Formulario de edición de productos
•	/products/ editar_producto/:id (PUT) —> Acción de edición (almacenamiento de producto luego de creación)
•	/products/:id (DELETE) —> Acción de eliminación de un producto

28-feb-2022
Multer (Sergio)
Se implementa multer en el proyecto para poder almacenar imágenes físicamente y poder mostrarlas.