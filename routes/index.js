const express = require('express');
const router = express.Router();

const homeRouter = require('../controllers/home_controller');

console.log('router connected !');

router.get('/' , homeRouter.home);
router.use('/edit', require('./edit'));


module.exports = router;
