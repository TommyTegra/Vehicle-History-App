// Models for the Service Log Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Failure: Internal MongoDB Server (Cluster0, Services database) (500) connection error.' });
    } else  {
        console.log('Success: Connection to MongoDB (Cluster0, Services database) via Mongoose accomplished.');
    }
});

// SCHEMA: Define the collection's schema.
const serviceSchema = mongoose.Schema({
	service:    { type: String, required: true },
	mileage:    { type: Number, required: true, default: 0, min: [0, 'Negative/Empty values are invalid.'] },
	date:       { type: Date, required: true, max: [Date.now, 'Future dates are invalid.'] , default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "serviceLogs".
const serviceLogs = mongoose.model('Service', serviceSchema);


// CREATE model *****************************************
const createLog = async (service, mileage, date) => {
    const record = new serviceLogs({ 
        service: service, 
        mileage: mileage, 
        date: date 
    });
    return record.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveLog = async () => {
    const query = serviceLogs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveLogById = async (_id) => {
    const query = serviceLogs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteLogById = async (_id) => {
    const result = await serviceLogs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateLog = async (_id, service, mileage, date) => {
    const result = await serviceLogs.replaceOne({_id: _id }, {
        service: service,
        mileage: mileage,
        date: date
    });
    return { 
        _id: _id, 
        service: service,
        mileage: mileage,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createLog, retrieveLog, retrieveLogById, updateLog, deleteLogById }