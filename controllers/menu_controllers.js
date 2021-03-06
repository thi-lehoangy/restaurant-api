const express = require('express');
const router = express.Router();

const MenuService = require('../services/MenuService');
const AuthService = require('../services/AuthService');

router.get('/getCount', MenuService.getDbCount);

router.get('/getAll/:page', AuthService.validateToken, MenuService.getAll);

router.get('/getById/(:id)', MenuService.getById);

router.post('/insertDish', MenuService.insertDish);

router.post('/removeDish', MenuService.removeDish);

router.post('/editDish', MenuService.changeDishInfo);

router.get('/searchDish', MenuService.searchDish);

module.exports = router;