var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    host_user : { type: ObjectId, ref: 'user' },
    diner_user : { type: ObjectId, ref: 'user' },
    slot: { type: ObjectId, ref: 'availability'}
    people_count : Number,
	created: {
		type: Date,
		default: Date.now
	},
		updated: {
		type: Date,
		default: null
	}
}, {
 collection: 'Reservation',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('reservation', schema);
 return conn.model('reservation');
}