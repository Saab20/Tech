function marcasData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(100)},
    };

    config = {camelCase:false, timestamps: false};

    const marcas = sequelize.define( 'marcas',cols,config)

    return marcas;
}

module.exports = marcasData;