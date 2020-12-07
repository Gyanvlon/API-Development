const express = require('express');
const conventionAndMahadivesanController = require('../controllers/conventionAndMahadivesan');
const router = express.Router();
router.get('/conventionAndMahadivesan-list', conventionAndMahadivesanController.getConventionAndMahadivesans);
router.post('/add-conventionAndMahadivesan', conventionAndMahadivesanController.addConventionAndMahadivesan);
router.get('/conventionAndMahadivesan/:conventionAndMahadivesanId', conventionAndMahadivesanController.getConventionAndMahadivesan);
router.delete('/delete-conventionAndMahadivesan/:conventionAndMahadivesanId', conventionAndMahadivesanController.deleteConventionAndMahadivesan);
router.put('/update-conventionAndMahadivesan/:conventionAndMahadivesanId', conventionAndMahadivesanController.updateConventionAndMahadivesan);
module.exports = router;
