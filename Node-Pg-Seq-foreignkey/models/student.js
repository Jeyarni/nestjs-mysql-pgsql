'use strict';

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../db/db");
const Department=require("./department")

class Student extends Model {}
Student.init(
  {
    intNo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    strRegNo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    strIndexNo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    strName: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    dateStartDateTime: {
      type: Sequelize.DATE,
      allowNull: true
    },
    dateEndDateTime: {
      type: Sequelize.DATE,
      allowNull: true
    },
    dateDOB: {
      type: Sequelize.DATE,
      allowNull: true
    },
    strDepartment: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
  },
  {
    sequelize,
    modelName: "Student"
  }
);

Student.belongsTo(Department, {
  foreignKey: "strDepartment",
  targetKey: "strDepartmentCode"
});

module.exports = Student;
