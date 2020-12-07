const express = require('express');
const LocalElection2074 = require('../controllers/localElecion2074');
const router = express.Router();
router.get('/localElection-list', LocalElection2074.getLocalElections);
router.post('/add-localElection', LocalElection2074.addLocalElection);
router.get('/localElection/:localElectionID', LocalElection2074.getLocalElection);
router.delete('/delete-localElection/:localElectionId', LocalElection2074.deleteLocalElection);
router.put('/update-localElection/:localElectionId', LocalElection2074.updateLocalElection);
module.exports = router;
