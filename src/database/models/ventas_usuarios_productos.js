function ventas_usuarios_productosData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        id_facturaFK: {type: Datatypes.INTEGER},
        id_forma_de_pagoFK: {type: Datatypes.INTEGER},
        id_productoFK: {type: Datatypes.INTEGER},
        cantidad_producto: {type: Datatypes.INTEGER},
        id_usuarioFK: {type: Datatypes.INTEGER},
    };

    config = {tableName: 'ventas_usuarios_productos', camelCase:false, timestamps: false};

    const ventas_usuarios_productos = sequelize.define( 'ventas_usuarios_productos',cols,config)

    return ventas_usuarios_productos;
}

module.exports = ventas_usuarios_productosData;