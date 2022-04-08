function productos_especificacionesData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        id_especificacionFK: {type: Datatypes.INTEGER},
        id_productoFK: {type: Datatypes.INTEGER},
    };

    config = {tableName: 'productos_especificaciones', camelCase:false, timestamps: false};

    const productos_especificaciones = sequelize.define( 'productos_especificaciones',cols,config)

    return productos_especificaciones;
}

module.exports = productos_especificacionesData;