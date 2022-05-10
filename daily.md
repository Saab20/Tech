
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

09-Mar-2022
Actualización vista login y formulario de registro de usuario. En el formulario de registro de usuario, el usuario ya puede ingresar toda la información solicitada. Y es recibida en el JSON.

20- Marzo- 2022
Se implementaron validaciones a los formularios desde HTML. (Sergio)

23-Mar-2022
Implementación de la libreria express validator, para el formulario de regitro de usuario (Yanneth)

28- Marzo-2022
Entrega de sprint 5. Con la respectiva implementación de los middlewares.

04- Abril- 2022

Implementación de libreria sequelize con la bd de https://www.alwaysdata.com/fr/ (Sergio)

08-Abr-2022

Creación de los modelos en sequelize

12- Abr-2022
Relaciones sequelize funcionales.

20- Abril-2022

Configuraciones CRUD productos a la base de datos

21- Abril-2022

Configuraciones CRUD usuarios a la base de datos

25-Abr-2022

Entrega del sprint 6. Todo lo requerido esta funcionando 

06- Mayo-2022

Se crearon las respectivas validaciones por Node js (backend) para el:

- Formulario de creación de producto
- Formulario de edición de producto

los Formulario de registro de usuario y Formulario de login de usuario, ya cuentan con las validaciones del lado del backend

09- Mayo- 2022 

Pendiente terminar de validar el carrito de compras 

