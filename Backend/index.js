const express = require('express');
const app = express();
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const PORT = process.env.PORT || 2700;

const path=require("path");
const cors = require('cors');

mongoDbUrl= "mongodb://127.0.0.1:27017/Rasta"

mongoose.connect(mongoDbUrl).then(db =>{

    console.log('MONGO connected');

}).catch(error=> console.log(error));
mongoose.set('strictQuery', false);
module.exports=app;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const metaDatas=require("./src/routes/metaData")
app.use('/',metaDatas)
const metaData=require('./src/models/metaData')


app.post('/getWayId', async (req, res) => {
    const { latitude, longitude } = req.body;
  
    if (!latitude || !longitude) {
      return res.json({
        error: 'Latitude and longitude are required in the request body.',
      });
    }
  
    const overpassQuery = `
    [out:json];
    way(around:100,${latitude},${longitude});
    out;
  `;
    try {
      console.log('Overpass Query:', overpassQuery);
  
      const response = await axios.post(
        'https://overpass-api.de/api/interpreter',
        overpassQuery,
      );
      // console.log('Overpass API Response:', response.data);
      if (response.data.elements && response.data.elements.length > 0) {
        const wayId = response.data.elements[0].id;
        console.log(wayId);
        res.json({ wayId });
      } else {
        res.json({ error: 'No ways found near the specified coordinates.' });
      }
    } catch (error) {
      console.error(error);
      res.json({ error: 'Internal server error.' });
    }
  });
  
  app.get('/getNodeIds/:wayId', async (req, res) => {
    const { wayId } = req.params;
    if (!wayId) {
      return res.json({ error: 'Way ID is required in the request parameters.' });
    }
  
    const overpassQuery = `
      [out:json];
      way(${wayId});
      out;
    `;
  
    try {
      const response = await axios.post(
        'https://overpass-api.de/api/interpreter',
        overpassQuery,
      );
      if (response.data.elements && response.data.elements.length > 0) {
        const nodes = response.data.elements[0].nodes;
        // console.log(response.data);
  
        if (nodes && nodes.length > 0) {
          const nodeIds = nodes.map((node) => node);
          res.json(response.data);
        } else {
          res.json({ error: 'No nodes found for the specified way ID.' });
        }
      } else {
        res.json({ error: 'No data found for the specified way ID.' });
      }
    } catch (error) {
      console.error(error);
      res.json({ error: 'Internal server error.' });
    }
  });
  
  
  app.get('/details', async (req, res) => {
    try {
      const groupedWayIds = await metaData.aggregate([
        {
          $unwind: '$properties.elements' 
        },
        {
          $group: {
            _id: '$properties.wayId',
            names: { $addToSet: '$properties.elements.tags.name' },
            coordinates: { $push: '$geometry.coordinates' },
          },
        },
      ]);
      const result = groupedWayIds.map((group) => ({
        wayId: group._id,
        name: group.names,
        coordinates: group.coordinates,
      }));
      res.json(result);
    } catch (error) {
     res,json({error:'Internal server error'})
  
    }
  });
  

app.listen(PORT, () => console.log('Application is running'))