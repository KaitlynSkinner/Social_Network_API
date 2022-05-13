// import Schema constructor, Types and model function
const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: { 
            type: String,
            required: ['Must be between 1 and 280 characters'],
            max: [280]
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: { 
            type: Date, 
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema({
        thoughtText: {
            type: String,
            required: ['Must be between 1 and 280 characters!'],
            min: [1],
            max: [280]
        },
        createdAt: { 
            type: Date, 
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: true,
        },
        // use ReactionSchema to validate data for a reaction
        reactions: [ReactionSchema]
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

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;