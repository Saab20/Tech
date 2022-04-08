
function productosData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type:Datatypes.STRING},
        precio: {type: Datatypes.INTEGER},
        inventario: {type: Datatypes.INTEGER},
        id_categoriaFK: {type: Datatypes.INTEGER},
        id_marcaFK: {type: Datatypes.INTEGER},
        descripcion: {type: Datatypes.STRING},
    };

    config = {camelCase:false, timestamps: false};

    const productos = sequelize.define( 'productos',cols,config)

    return productos;
}

module.exports = productosData;