const { DataTypes } = require('sequelize');
const sequelize = require('../src/db/sequelize'); // importa a conexão

const EnvioDeEmail = sequelize.define('EnvioDeEmail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  Usuario: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Usuarios', // Nome da tabela referenciada
      key: 'id' // Chave primária da tabela referenciada
    },

  },
  Email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Enviado: {
    type: DataTypes.DATE(6),
    allowNull: true,
        },
},{timestamps: false});

module.exports = EnvioDeEmail;