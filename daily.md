
24/01/2022

Vista de carrito - Sergio 
Vista de Registro -Yanneth
Vista de Login -Guido

Home (Vista de home)- Tabaja en equipo

30/01/2022

Agregar boton de compra
Agregar carrusel de imagenes
Mejorar contenedor de producto

14/02/2022

Se realizo ajuste del proyecto a la arquitectura interna MVC, se realizó cambios de la extensión de los html a ejs. Se crearon en views las carpetas products y users y se crearon los controladores correspondientes para cada vista en controllers y las rutas correspondientes en routes.

Pendiente crear y editar formularios de productos 

15/02/2022

Formularios de crear y editar productos, creados.

16/02/2022

Sprint tres terminado, revisar playgroud  y clases para generar los JSON y el CRUD de productos, para sprint cuatro.

23-feb-2022
Sprint 4
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
Se implementa multer en el proyecto para poder almacenar imágenes físicamente y poder mostrarlas.