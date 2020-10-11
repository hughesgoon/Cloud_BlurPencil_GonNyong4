const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const userSchema = new Schema({
	// 아이디
	user_id: {
		type: String,
		required: true,
		unique: true
	},
	// 비밀번호
	user_pw: {
		type: String,
		required: true
	},
	// 작업내역
	user_work: {
		type: [String],
		default: []
	},
	// 로그
	user_log: {
		type: [String],
		default: []
	},
	// 생성일
	user_createdAt: {
		type: Date,
		default: Date.now
	},
	// 마지막 접속
	user_updatedAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);