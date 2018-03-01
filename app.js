var jarvice = require("./lib/jarvice.js");


console.log('Working...');
  
console.log(process.env.username)
console.log(process.env.apikey)


var options = {
	url: 'https://api.jarvice.com/jarvice/submit',
	method: 'POST',
	port: 443,
	body:{"app": "migenius-irayviewer",
	  "staging": false,
	  "checkedout": false,
	  "application": {
	    "command": "irayviewer",
	    "geometry": "1520x695"
	  },
	  "machine": {
	    "type": "ng4",
	    "nodes": 1
	  },
	  "vault": {
	    "name": "drop.jarvice.com",
	    "force": false,
	    "readonly": false
	  },
	  "user": {
	    "username": process.env.username, 
	    "apikey": process.env.apikey
	  }
	},
	json: true,
};

        
jarvice.submitJob(options);

//jarvice.getJobs();

//jarvice.tail(367910);


//jarvice.shutdownJob(367910);   // graceful

//jarvice.terminateJob(368431)   // Immediate

//jarvice.connect(367910);

//jarvice.tail(xx);

//jarvice.info(367910);

//jarvice.getMachines();

//jarvice.getOutput(367910);

//jarvice.getApps();

//jarvice.getScreenshot(297527);
