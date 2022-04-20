'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    limit: Number,
    strTimes: [String], //modifying the model in order to include strTimes field which will contain list of Strings
    times: Mixed,
    enrolled: Number,
    details: String,
    type: String,
    status_text: String,
    section: String,
    waiting: Number,
    instructor: Mixed,
    coinstructors: Mixed,
    code: Mixed,
    subject: String,
    coursenum: String,
    num: Number,
    suffix: String,
    name: String,
    independent_study: Boolean,
    term: Number,
    description: String,
} );

module.exports = mongoose.model( 'Course', courseSchema );
