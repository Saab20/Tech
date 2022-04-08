function facturasData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        numero_factura: {type: Datatypes.STRING},
        fecha: {type: Datatypes.DATE},
        valor: {type: Datatypes.INTEGER},
    };

    config = {camelCase:false, timestamps: false};

    const facturas = sequelize.define( 'facturas',cols,config)

    return facturas;
}

module.exports = facturasData;