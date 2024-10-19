// models/item.js
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../config/db.js';

class Item extends Model {}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quantityTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantityAvailable: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Item',
    tableName: 'Items',
    timestamps: true
});

export default Item;