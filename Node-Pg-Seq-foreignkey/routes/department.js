const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
// require("express-async-errors");
const logger = require("../logging/log");
const Department =require("../models/department")

router.get("/", async (req, res) => {
    try {
      const department = await Department.findAll({
        attributes: ["strDepartmentCode", "strDepName"]
      });
      res.send(department);
    } catch (error) {
      console.log(error);
    }
  });

router.post("/", async (req, res) => {
    const result = await Department.create(
      req.body
    );
    res.send(result);
  });
  module.exports = router;
  