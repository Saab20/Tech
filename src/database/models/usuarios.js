function usuariosData(sequelize, Datatypes) {

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(50)},
        apellido: {type: Datatypes.STRING(50)},
        email: {type: Datatypes.STRING(50)},
        direccion: {type: Datatypes.STRING(50)},
        dni: {type: Datatypes.STRING(50)},
        telefono: {type: Datatypes.INTEGER}
    };

    config = {camelCase:false, timestamps: false};

    const usuarios = sequelize.define( 'usuarios',cols,config)

    usuarios.associate = function(modelos) {
        usuarios.hasMany(modelos.ventas_usuarios_productos, {
            as: 'ventas_usuarios_productos',
            foreignKey: 'id_usuarioFK'  
        })
    }

    return usuarios;
}

module.exports = usuariosData;