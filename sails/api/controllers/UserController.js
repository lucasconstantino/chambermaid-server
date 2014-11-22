/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  addDevice: function(req, res) {
    sn = req.body.sn;
    Device.findOneBySerialNumber(sn, function(device) {
      If (device.owner != null) {
        //send error said device has a owner already
      } else {
        //link device to owner
      }
    });
  },
};

