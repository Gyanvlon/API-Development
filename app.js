const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const InternationalCommittee = require('./models/internationalCommittee');
const NationalCommittee = require('./models/nationalCommittee');
const DistrictCommittee = require('./models/districtCommittee');

const app = express();
const internationalCommitteeRoutes = require('./routes/internationalCommittee');
const nationalCommitteeRoutes = require('./routes/nationalCommittee');
const localElection2074Routes = require('./routes/localElection2074');
const districtCommitteeRoutes = require('./routes/districtCommittee');
const conventionAndMahdivesanRoutes = require('./routes/convention&Mahadivesan');
const centeralCommitteeRoutes = require('./routes/centeralCommittee');
const userRoutes = require('./routes/user');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/internationalCommittee', internationalCommitteeRoutes);
app.use('/nationalCommittee',nationalCommitteeRoutes);
app.use('/localElection2074',localElection2074Routes);
app.use('/districtCommittee',districtCommitteeRoutes);
app.use('/conventionAndMahadivesan',conventionAndMahdivesanRoutes);
app.use('/centeralCommittee',centeralCommitteeRoutes);
app.use('/user',userRoutes); 
app.use((error, req, res, next)=>{
console.log(error)
const status = error.status || 500;
const message= error.message
req.status(status).json({message:message})
})


sequelize.sync()
  .then(result => {
    console.log(result);
    app.listen(3000);
  }).catch(err => {
    console.log(err);
  });
