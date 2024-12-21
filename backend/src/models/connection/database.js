const mongoose = require('mongoose');
const logger = require('../../utils/info_logger');
// Import your logger if you have one

const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(() => {
        logger.info("Database Connection Is Provided");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error); 
        process.exit(1); 
    });
};

module.exports = databaseConnection;
