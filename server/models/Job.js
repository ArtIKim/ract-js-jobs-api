const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, "Please provide company name"],
            maxlength: 50,
        },
        company: {
            type: String,
            required: [true, "Please provide position"],
            maxlength: 100,
        },
        status: {
            type: String,
            enum: ["interview", "decline", "pending"],
            default: "pending",
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            require: [true, "Please provide user"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
