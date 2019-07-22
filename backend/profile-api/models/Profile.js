const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    id: {
        type: String,
        max: 50,
        required: true
    },
    profileId: {
        type: String,
        max: 50,
        required: true
    },
    profile: {
        age: {
            type: Number,
            min: 16,
            max: 100,

        },
        role: {
            type: String,
            max: 50,
        },
        team: {
            type: String,
            max: 50,
        },
        picture: {
            type: String,
            max: 200,
        },
    },
    stats: {
        blocks: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        totalTackles: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        interceptions: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        tacklesWon: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        yellowCards: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        passingAccuracy: {
            type: Number,
            min: 0,
            max: 999999999999999,
        },
        clearances: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        totalCrosses: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        aerialDuelsWon: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        minutesPlayed: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        minutesPerGoal: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        headedGoals: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        foulsConceded: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        totalPasses: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        totalShots: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        otherGoals: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        duelsWon: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        shotsOnTarget: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        leftFootGoals: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        rightFootGoals: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        starts: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        goalsFromInsideBox: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        substitutionOff: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        foulsWon: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        assists: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        gamesPlayed: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        substitutionOn: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        redCards: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        goals: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        successfulCrosses: {
            type: Number,
            min: 0,
            max: 999999999999999,

        },
        goalsFromOutsideBox: {
            type: Number,
            min: 0,
            max: 999999999999999,

        }
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
