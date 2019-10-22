const Sequelize = require("sequelize");
require("express-async-errors");
const logger = require("../logging/log");

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss.SSS");
};

const sequelize = new Sequelize("sms", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully...");
  })
  .catch(err => {
    logger.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
