const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectdatabase = require('./config/connectdatabase');
const contactRoutes = require('./routes/contact');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

connectdatabase();
app.use(express.json());
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => 
    console.log(`MongoDB connected to host:${ process.env.PORT}`)
);