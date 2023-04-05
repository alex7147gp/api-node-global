const { Model, DataTypes, Sequelize } = require('sequelize');


const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./product.model')



const ORDER_PRODUCT_TABLE = 'orderProduct';

const OrderProductSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	createdAt: {
		sllowNull: false,
		type: DataTypes.DATE,
		field: 'create_at',
		defaultValue: Sequelize.NOW
	},
	amount: {
		allowNull: false,
		type: DtaTypes.INTEGER
	}
	orderId: {
		field: 'order_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		unique: true,
		references: {
			model: ORDER_TABLE,
            key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
	},
	productId: {
		field: 'product_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		unique: true,
		references: {
			model: PRODUCT_TABLE,
            key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
	}
}

class OrderProduct extends Model {
	static associate(models) {
		this.hasOne(models.Customer, {
			as: 'customer',
			foreignKey: 'userId'
		});
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: ORDER_PRODUCT_TABLE,
			modelName: 'OrderProduct',
			timestamps: false
		}
	}
}



module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct };