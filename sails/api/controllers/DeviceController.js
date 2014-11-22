/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  
	auth: function(req, res) {
  	sn = req.body.sn;
  	key = req.body.key;
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
	
	isAuthenticated: function(req, res) {
  	    res.send(req.session.device);
  	    console.log(req.session);
	}	
};

