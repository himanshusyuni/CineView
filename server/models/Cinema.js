const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			unique: true,
			required: [true, 'Please add a name']
		},
		theaters: [{ type: mongoose.Schema.ObjectId, ref: 'Theater' }]
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Cinema', cinemaSchema)
