// Controllers for the Service Log Collection

import 'dotenv/config';
import express from 'express';
import * as serviceLogs from './car-history-model.mjs';
import cors from 'cors';


const PORT = process.env.PORT;
const app = express();

const corsOptions = {
    origin: "https://vehicle-history-app.onrender.com", // Your frontend URL
  };
app.use(cors(corsOptions)); // Use the CORS middleware


app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('https://vehicle-history-backend.onrender.com/serviceLogs', (req,res) => { 
    serviceLogs.createLog(
        req.body.service, 
        req.body.mileage, 
        req.body.date
        )
        .then(record => {
            res.status(201).json(record);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Failure: Client-side bad request (400).' });
        });
});


// RETRIEVE controller ****************************************************
app.get('https://vehicle-history-backend.onrender.com/serviceLogs', (req, res) => {
    serviceLogs.retrieveLog()
        .then(record => { 
            if (record !== null) {
                res.json(record);
            } else {
                res.status(404).json({ Error: 'Failure: Requested resource does not exist (404).' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failure: Client-side bad request (400).' });
        });
});


// RETRIEVE by ID controller
app.get('https://vehicle-history-backend.onrender.com/serviceLogs/:_id', (req, res) => {
    serviceLogs.retrieveLogById(req.params._id)
    .then(record => { 
        if (record !== null) {
            res.json(record);
        } else {
            res.status(404).json({ Error: 'Failure: Requested resource does not exist (404).' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failure: Client-side bad request (400).' });
    });

});


// UPDATE controller ************************************
app.put('https://vehicle-history-backend.onrender.com/serviceLogs/:_id', (req, res) => {
    serviceLogs.updateLog(
        req.params._id, 
        req.body.service, 
        req.body.mileage, 
        req.body.date
    )
    .then(record => {
        res.json(record);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Failure: Client-side bad request (400).' });
    });
});


// DELETE Controller ******************************
app.delete('https://vehicle-history-backend.onrender.com/serviceLogs/:_id', (req, res) => {
    serviceLogs.deleteLogById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Success: Deletion of requested element accomplished (200).' });
            } else {
                res.status(404).json({ Error: 'Failure: Requested resource does not exist (404).' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Failure: Unexpected error occurred. No deletion was performed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});