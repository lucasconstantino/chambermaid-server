/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  
  auth: function(req, res) {
    params = req.params.all();
    sn = params.sn;
    key = paramsn.key;
    Device.findOneBySerialNumber(sn, function(err, device) {
       if (device) {
        // found a device with that sn, check key
        req.session.device = id;
        req.session.save();
      } else {
        console.log('no device found')
      }
    });
  },

  
  act: function(req, res) {
    params = req.params.all();
    id = params.id;
    action = params.action;
    Action.create({
      caster: req.session.passport.user,
      device: id,
      action: action
    }).exec(function(err, action) {
      if (err) {
        res.send(err);
      } else {
        res.send(action);
      }
    });
  },
  
  actions: function(req, res) {
    Action.findByOwner(req.session.device, function(err, actions) {
      if (err) {
        res.send(err);
      } else {
        res.send(actions);
      }
    });
  }
  
};

