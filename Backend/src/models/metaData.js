// const mongoose = require('mongoose');

// const metaDataSchema = new mongoose.Schema({

//   image_details:{
//   filename: {
//     type: String,
//     required: true,
//   },
//   timestamp: {
//     type: Date,
//     required: true,
//   },
//   location: {
//     type: {
//       latitude: {
//         type: Number,
//         required: true,
//       },
//       longitude: {
//         type: Number,
//         required: true,
//       },
//     }
//   }
// },
//  ai_output: {
//     type: {
//       class_labels: {
//         type: [String],
//         required: true,
//       },
//       probabilities: {
//         type: [Number],
//         required: true,
//       },
//       num_signs_detected: {
//         type: Number,
//         required: true,
//       },
//     }
//   },

  
// });

// const metaData = mongoose.model('MetaData', metaDataSchema);
// module.exports=metaData;

// const mongoose = require('mongoose');
// const metaDataSchema = new mongoose.Schema({
//   image_details: {
//     filename: { type: String, required: true },
//     timestamp: { type: Date, default: Date.now, required: true },
//   },
//   geometry: {
//     type: { type: String, enum: ['Point'], default: 'Point', required: true },
//     coordinates: { type: [Number], required: true },
//     wayId: { type: String, required: true },
//     elements: [
//       {
//         type: { type: String, enum: ['way', 'node'], required: true },

//         nodes: { type: [Number], required: true },
//         tags: {
//           highway: { type: String, required: true },
//           lanes: { type: String, required: true },
//           maxspeed: { type: String, required: true },
//           name: { type: String, required: true },
//           oneway: { type: String, required: true },
//           surface: { type: String, required: true },
//         },
//       },
//     ],
//   },
//   ai_output: {
//     class_labels: { type: [String], required: true },
//     probabilities: { type: [Number], required: true },
//     num_signs_detected: { type: String },
//   },
// },{collection : 'MetaData' });

// const metaData = mongoose.model('MetaData', metaDataSchema);

// module.exports = metaData;


const mongoose = require('mongoose');

const metaDataSchema = new mongoose.Schema({
  type: { type: String, enum: ['Feature'], default: 'Feature', required: true },
  geometry: {
    type: { type: String, enum: ['Point'], default: 'Point', required: true },
    coordinates: { type: [Number], required: true },
  },
  properties: {
    image_details: {
      filename: { type: String, required: true },
      timestamp: { type: Date, default: Date.now, required: true },
    },
    wayId: { type: String, required: true },  
    elements: [
      {
        type: { type: String, enum: ['way', 'node'], required: true },
        nodes: { type: [Number], required: true },
        tags: {
          highway: { type: String },
          lanes: { type: String },
          maxspeed: { type: String },
          name: { type: String, required: true },
          oneway: { type: String },
          surface: { type: String},
        },
      },
    ],
    ai_output: {
      class_labels: { type: [String], required: true },
      probabilities: { type: [Number], required: true },
      num_signs_detected: { type: String },
    },
  },
}, { collection: 'MetaData' });

const metaData = mongoose.model('MetaData', metaDataSchema);

module.exports = metaData;
