const mongoose = require('mongoose')

const showtimeSchema = new mongoose.Schema({
	theater: { type: mongoose.Schema.ObjectId, ref: 'Theater' },
	movie: { type: mongoose.Schema.ObjectId, ref: 'Movie' },
	showtime: Date,
	seats: [
		{
			row: { type: String, required: [true, 'Please add a seat row'] },
			number: { type: Number, required: [true, 'Please add a seat number'] },
			user: { type: mongoose.Schema.ObjectId, ref: 'User' }
		}
	],
	isRelease: Boolean
})


module.exports = mongoose.model('Showtime', showtimeSchema)
