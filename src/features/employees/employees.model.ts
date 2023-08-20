
import { DataTypes } from 'sequelize';

import db from '../../config/db';

const employees = db.define('employees',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    modelName: "employees",
    timestamps: false
  }
);

db.sync();

export default employees;