const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    title: {
        type: String,
	},
	
    date: {
        type: String
    }
})

const ClientsSchema = new Schema({
	date:{
		type: String,
	},

	name: {
		type: String,
	},

	address: {
		type: String,
	},

	mobileNo: {
		type: Number,
	},

	work: {
		type: [WorkSchema],
        default: []
	}
})

module.exports = mongoose.model('clients', ClientsSchema);