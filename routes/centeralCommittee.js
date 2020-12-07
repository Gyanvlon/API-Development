const express = require('express');
const centeralCommitteeController = require('../controllers/centeralCommittee');
const router = express.Router();
router.get('/centeralCommittee-list', centeralCommitteeController.getCenteralCommittees);
router.post('/add-centralCommittee', centeralCommitteeController.addCenteralCommittee);
router.get('/centeralCommittee/:centeralCommitteeId', centeralCommitteeController.getCenteralCommittee);
router.delete('/delete-centralCommittee/:centeralCommitteeId', centeralCommitteeController.deleteCenteralCommittee);
router.put('/update-centeralCommittee/:centeralCommitteeId', centeralCommitteeController.updateCenteralaCommittee);
module.exports = router;
