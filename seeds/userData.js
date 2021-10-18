const { User } = require('../models')

const userdata = [
      {
            username: "johndoe",
            email: "johndoe@email.com",
            password: "$2a$10$LZnlxt/DMja5BxNWQJHNm.AE6VqKVDu3KNkMRwuZp9Gr4U0gLJa82"
      },
      {
            username: "annierichards",
            email: "annierichards@email.com",
            password: "$2a$10$wC4dO58npVrgaMDetpQ7teatjQ.ik6me.v/wZZoa2k5GzoM1Rohda"
      },
      {
            username: "billythompson",
            email: "billythompson@email.com",
            password: "$2a$10$kvadxlptLNqVzxAiFYdK2ODCepzR4Yd9tbV50Z7.Ji4Wq1AbZt4W2"
      },
      {
            username: "sharongreen",
            email: "sharongreen@email.com",
            password: "$2a$10$ciFhCab7XF9wdp62avjXSeXgVxv8SpnO6aDaYH2rI0r0CSCsgie.i"
      },
      {
            username: "ericadams",
            email: "ericadams@email.com",
            password: "$2a$10$r6oDQ/UbC2qy3SRxeznTIevIgIsCLy36aFS7aknkALlReXdZk6tNu"
      }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;