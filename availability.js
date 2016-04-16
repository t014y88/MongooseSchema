var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    menu: { type: ObjectId, ref: 'menu' },
    availability: [
    	{
    		date: Date,
    		available_spots: Number
    	}
    ],
	created: {
		type: Date,
		default: Date.now
	},
		updated: {
		type: Date,
		default: null
	}
}, {
 collection: 'Availability',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('availability', schema);
 return conn.model('availability');
}