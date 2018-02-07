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

//jarvice.jobStatus(359982);


//jarvice.shutdownJob(xx);   // graceful

//jarvice.terminateJob()   // Immediate

//jarvice.connect(xx);

//jarvice.tail(xx);

//jarvice.info(xx);

//jarvice.getMachines();

//jarvice.getOutput(289503);

//jarvice.getApps();

//jarvice.getScreenshot(297527);
