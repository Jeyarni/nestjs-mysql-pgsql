'use strict';

const Sequelize = require("sequelize");
const sequelize = require("../db/db");
const Model = Sequelize.Model;
const Student=require("./student")

class Department extends Model {}
Department.init(
  {
    strDepartmentCode: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    strDepName: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "Department"
  }
);

Department.belongsTo(Student, {
  foreignKey: "strDepartmentCode",
  targetKey: "strDepartment"
});

module.exports = Department;
