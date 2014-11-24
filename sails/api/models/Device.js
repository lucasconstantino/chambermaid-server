/**
* Device.js
*
* @description :: Real world devices to be controlled remotely.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // e.g. "Front Gate"
    name: {
      type: 'string',
      required: true,
    },

    // e.g. <SSH HASH>
    pbkey: {
      type: 'string',
      required: true,
      unique: true,
    },

    // e.g. [{ id : 5464276d526ba0600541a628, name: 'Open' }, { id : 5464276d526sss323r541a628, name: 'Close' }]
    functions: {
      type: 'array',
    },

    // user id
    owner: {
      model: 'user',
    },

    // e.g. "Gate Motor Maker"
    make: {
      type: 'string'
    },

    // e.g. "Gate Motor GZX"
    model: {
      type: 'string'
    },

    // e.g. RWUR38S7J4EU7TJN
    serialNumber: {
      type: 'string',
      unique: true,
      required: true
    }
  }
};
