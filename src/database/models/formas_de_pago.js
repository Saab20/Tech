function formas_de_pagoData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(100)},
    };

    config = {tableName: 'formas_de_pago', camelCase:false, timestamps: false};

    const formas_de_pago = sequelize.define( 'formas_de_pago',cols,config)

    return formas_de_pago;
}

module.exports = formas_de_pagoData;