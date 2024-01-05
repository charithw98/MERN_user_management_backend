const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createuser', controller.getUsers);
router.post('/updateuser', controller.getUsers);
router.post('/deleteuser', controller.getUsers);

module.exports = router;

