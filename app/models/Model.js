/**
 * Model class contains everything that is needed for all models
 * Including all models goes from here too, and anything that
 * is needed can be added here for other models to use it.
 */
class Model {
    constructor() {
        const config = require('../config/Config');

        this.mongoose = config.Db();

        /**
         * Including models globally
         */
        this.User    = require('./User.js');
        this.Country = require('./Country.js');


        /**
         * Bcrypt - For hashing a password
         */
        this.bcrypt = require('bcrypt');
    }

}

module.exports = Model;