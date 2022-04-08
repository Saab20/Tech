function especificacionesData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        tipo: {type: Datatypes.STRING},
        valor: {type: Datatypes.STRING}
    };

    config = {camelCase:false, timestamps: false};

    const especificaciones = sequelize.define( 'especificaciones',cols,config)

    return especificaciones;
}

module.exports = especificacionesData;
