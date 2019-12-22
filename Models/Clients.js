const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
	date:{
		type: [String],
		default: []
	},
	name: {
		type: String,
		required: false
	},
	address: {
		type: String,
		required: false,
	},
	mobileNo: {
		type: Number,
		required: false,
	},
	work: {
		type: [String],
		default: []
	}
})

module.exports = mongoose.model('clients', ClientsSchema);