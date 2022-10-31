var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restaurantController');
router.get('/', restaurantController.viewAll);

module.exports = router;
router.get('/edit/:id', restaurantController.renderEditForm);
router.post('/edit/:id', restaurantController.updateRestaurant);
router.get('edit/.id', restaurantController.deleteRestaurant);
router.get('/add', restaurantController.renderAddForm);
router.post('/add', restaurantController.addRestaurant);