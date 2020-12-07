const express = require('express');
const districtCommitteeController = require('../controllers/districtCommittees');
const router = express.Router();
router.get('/districtCommittee-list', districtCommitteeController.getDistrictCommittees);
router.post('/add-districtCommittee', districtCommitteeController.addDistrictCommittee);
router.get('/districtCommittee/:districtCommitteeId', districtCommitteeController.getDistrictCommittee);
router.delete('/delete-districtCommittee/:districtCommitteeId', districtCommitteeController.deleteDistrictCommittee);
router.put('/update-districtCommittee/:districtCommitteeId', districtCommitteeController.updateDistrictCommittee);
module.exports = router;
