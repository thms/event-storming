'use strict';
const seeder = require('mongoose-seed');
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/database.json')[env];


// TODO: read data files per model and run that instaed of lumping it all in here.

// Connect to MongoDB via Mongoose
seeder.connect(config.connection, function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/event.js',
    'models/policy.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Event', 'Policy'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        model: 'Event',
        documents: [
            {
                name: 'loan-submitted',
                xpos: 10,
                ypos: 10
            },
            {
                name: 'loan-approved',
                xpos: 30,
                ypos: 10
            }
        ]
    },
    {
    model: 'Policy',
    documents: [
      {
        name:'score loan',
        xpos: 10,
        ypos: 10
      },
      {
        name: 'payout loan',
        xpos: 40,
        ypos: 10
      }
    ]
  }
];
