/**
* Training.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  tableName: 'trainings',
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      required: true,
      columnName: 'id'
    },
    location: {
      type: 'string',
      required: true,
      size: 50,
      columnName: 'location'
    },
    startDateAndTime: {
      type: 'datetime',
      required: true,
      columnName: 'startDateTime'
    },
    endDateAndTime: {
      type: 'datetime',
      required: true,
      columnName: 'endDateTime'
    }
  }
};
