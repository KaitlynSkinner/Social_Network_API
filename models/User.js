// import Schema constructor and model function
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // set to false as Mongoose returns this virtual itself
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// UserSchema.virtual('thoughtCount').get(function() {
//     return this.thoughts.length;
// });

const User = model('User', UserSchema);

module.exports = User;

// MOCK DATA
// {
// 	"userName": "kaitlynskinner",
// 	"email": "kaitlyneskinner@gmail.com"
// }

// {
// 	"thoughtText": "This is the most amazing application ever!",
// 	"userName": "jessicaskinner"
// }

// {
// 	"friends": [
// 		"jessikacampbell"
// 	]
// }