const InternationalCommittee = require('../models/internationalCommittee')
exports.addInternationalCommittee = (req, res, next) => {
    const name = req.body.name;
    const gender= req.body.gender;
    // const email = req.body.email;
    // const contactNo = req.body.contactNo;
    // const officeAddress = req.body.officeAddress;
    // const officeEmail= req.body.officeEmail;
    // const position = req.body.position;
    // const officeWebsite=req.body.officeWebsite;
    // const officeName = req.body.officeName;
    // const country = req.body.country;
    // const officeContactNo= req.body.officeContactNo
    InternationalCommittee.create({
        name: name,
        gender:gender,
        // contactNo:contactNo,
        // email: email,
        // position:position,
        // officeName: officeName,
        // country:country,
        // officeAddress: officeAddress,
        // office_contactNo:officeContactNo,
        // officeEmail: officeEmail,
        // officeWebsite:officeWebsite
      })
      .then(result => {
        res.json(result)
      })
      .catch(next);
  };
  exports.getInternationalCommittee = (req, res, next) => {
    InternationalCommittee.findAll()
      .then(result => {
        res.json(result)
      })
      .catch(next);
  };