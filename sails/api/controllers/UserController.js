/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  linkDevice: function(req, res) {
    params = req.params.all();
    sn = params.sn;
    Device.findOneBySerialNumber(sn, function(err, device) {
      if (err) {
        //console.log('error', err);
        return;
      }
      if ('owner' in device) {
        console.log('Device is alreadly own')
      } else {
        User.findOneById(req.session.passport.user, function(err, user) {
          user.devices.add(device.id);
          user.save(function(err) {});
        });
      }
    });
  },
  
  unlinkDevice: function(req, res) {
    sn = req.body.sn;
  },
  
  devices: function(req, res) {
    User.findOneById(req.session.passport.user, function(err, user) {
      console.log(user);
    });
  }
};

