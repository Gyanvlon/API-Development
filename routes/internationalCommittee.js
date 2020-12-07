const express = require('express');
const internationalCommitteeController = require('../controllers/internationalCommittees');
const router = express.Router();
router.get('/internationalCommittee-list', internationalCommitteeController.getInternationalCommittees);
router.post('/add-internationalCommittee', internationalCommitteeController.addInternationalCommittee);
router.get('/internationalCommittee/:internationalCommitteeId', internationalCommitteeController.getInternationalCommittee);
router.delete('/delete-internationalCommittee/:internationalCommitteeId', internationalCommitteeController.deleteInternationalCommittee);
router.put('/update-internationalCommittee/:internationalCommitteeId', internationalCommitteeController.updateInternationalCommittee);
module.exports = router;
