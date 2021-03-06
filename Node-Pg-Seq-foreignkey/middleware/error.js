const logger = require("../logging/log");

module.exports = (err, req, res, next) => {
  logger.error(err.message, err);
  res.status(500).send(err.message);
};
