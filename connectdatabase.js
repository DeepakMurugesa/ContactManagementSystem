const mongoose = require('mongoose');

const connectdatabase = async() => {
    
    
    try{

    const conn =await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected to host:${ conn.connection.host}`);
    }
    catch{(error) 
        console.log(`MongoDB connection error:, ${error}`);
        process.exit(1);
    }
};

module.exports = connectdatabase;
