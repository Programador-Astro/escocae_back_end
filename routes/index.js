var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  

  const sequelize = require('../src/db/server.js').default;
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  } catch (error) {
  console.error('Unable to connect to the database:', error.message);
  }
  res.send("hello 3")
});

module.exports = router; 

// Testando Git
