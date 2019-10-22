const express = require("express");
const router = express.Router();
require("express-async-errors");
const logger = require("../logging/log");
const Student= require("../models/student")

router.get("/", async (req, res) => {
    try {
      const student = await Student.findAll({
        attributes: ["intNo", "strRegNo","strIndexNo","strName","dateStartDateTime","dateEndDateTime","dateDOB","strDepartment"]
      });
      res.send(student);
    } catch (error) {
      logger.log(error);
    }
});

router.post("/", async (req, res) => {
    const result = await Student.create(req.body);
    res.send(result);
});

module.exports = router;