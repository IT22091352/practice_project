const express = require('express');
const router = express.Router();

//insert Model
const Bus = require('../Models/BusModel');
//insert Controller
const BusController = require('../Controllers/BusController');

router.get('/', BusController.getAllBuses);
router.post('/', BusController.addBuses);
router.get('/:id', BusController.getById);
router.put('/:id', BusController.updateBus);
router.delete('/:id', BusController.deleteBus);

//export router
module.exports = router;