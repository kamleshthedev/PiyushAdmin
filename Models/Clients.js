const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true,
	},
	mobileNo: {
		type: Number,
		required: true,
	},
	work: {
		type: [String],
		default: []
	}
})

module.exports = mongoose.model('clients', ClientsSchema);