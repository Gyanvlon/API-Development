const express = require('express');
const nationalCommitteeController = require('../controllers/nationalCommittees');
const router = express.Router();
router.get('/nationalCommittee-list', nationalCommitteeController.getNationalCommittees);
router.post('/add-nationalCommittee', nationalCommitteeController.addNationalCommittee);
router.get('/nationalCommittee/:nationalCommitteeId', nationalCommitteeController.getNationalCommittee);
router.delete('/delete-nationalCommittee/:nationalCommitteeId', nationalCommitteeController.deleteNationalCommittee);
router.put('/update-nationalCommittee/:nationalCommitteeId', nationalCommitteeController.updateNationalCommittee);
module.exports = router;
