const mongoose = require('mongoose')

const theaterSchema = new mongoose.Schema({
	cinema: { type: mongoose.Schema.ObjectId, ref: 'Cinema' },
	number: { type: Number, required: true },
	seatPlan: {
		row: {
			type: String,
			maxlength: 2,
			required: [true, 'Please add a seatPlan row']
		},
		column: {
			type: Number,
			required: [true, 'Please add a seatPlan column']
		}
	},
	showtimes: [{ type: mongoose.Schema.ObjectId, ref: 'Showtime' }]
})


module.exports = mongoose.model('Theater', theaterSchema)
