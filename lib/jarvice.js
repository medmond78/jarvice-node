
var rp = require('request-promise-native');
	
console.log(process.env.username)
console.log(process.env.apikey)	
	
module.exports = {

	submitJob: function(options) {
	
	//*** Example options ***//
	
	// var options = {
	// 	url: 'https://api.jarvice.com/jarvice/submit',
	// 	method: 'POST',
	// 	port: 443,
	// 	body:{"app": "migenius-irayviewer",
	// 	  "staging": false,
	// 	  "checkedout": false,
	// 	  "application": {
	// 	    "command": "irayviewer",
	// 	    "geometry": "1520x695"
	// 	  },
	// 	  "machine": {
	// 	    "type": "ng4",
	// 	    "nodes": 1
	// 	  },
	// 	  "vault": {
	// 	    "name": "drop.jarvice.com",
	// 	    "force": false,
	// 	    "readonly": false
	// 	  },
	// 	  "user": {
	// 	    "username": process.env.username, 
	// 	    "apikey": process.env.apikey
	// 	  }
	// 	},
	// 	json: true,
	// };
	
	
	rp(options)
		.then(function (job_status) {
			console.log(job_status);
			return(job_status);
		});
	},
	
	
	jobStatus: function(job_number) {
		
	var options = {
		uri: 'http://api.jarvice.com/jarvice/status',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
			number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	
	rp(options)
		.then(function (job_status) {
			console.log(job_status);
			return(job_status);
		});
	},
	
	
	
	getJobs: function() {
		
	var options = {
		uri: 'http://api.jarvice.com/jarvice/jobs',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	
	rp(options)
		.then(function (current_jobs) {
			console.log(current_jobs);
			return(current_jobs);
		});	
	},
	
	
	//Shutdown an active job gracefully
	// Requires a job number
	
	shutdownJob: function(job_number) {
		
	var options = {
		uri: 'http://api.jarvice.com/jarvice/shutdown',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
				number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	
	rp(options)
		.then(function (shutdown_status) {
			console.log(shutdown_status);
			return(shutdown_status);
		});
	},
	
	
	//Immediately terminate an active job. (not graceful!)
	// Requires a job number
	
	terminateJob: function(job_number) {
		
	var options = {
		uri: 'http://api.jarvice.com/jarvice/terminate',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
				number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	
	rp(options)
		.then(function (terminate_status) {
			console.log(terminate_status);
			return(terminate_status);
		});
	},
	
	
	// Request connection info for a currently running job
	// Requires a job number
	
	connect: function(job_number) {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/connect',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
				number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (connection_info) {
			console.log(connection_info);
			return(connection_info);
		});
	},
	

	// Runs tail on the specified job
	// Requires a job number
	
	tail: function(job_number) {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/tail',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
				number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (job_tail) {
			console.log(job_tail);
			return(job_tail);
		});
	},
	
	// Returns application-specific information for a running job
	// Requires a job number
	
	getInfo: function(job_number) {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/info',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
				number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (job_Info) {
			console.log(job_Info);
			return(job_Info);
		});
	},
	
	
	// Get list of available JARVICE machines
	// No arguments required
	
	getMachines: function() {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/machines',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (machine_info) {
			console.log(machine_info);
			return(machine_info);
		});
	},
	
	
	// Returns application-specific information for a running job
	// Requires a job number
	
	getOutput: function(job_number) {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/output',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
			number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (job_output) {
			console.log(job_output);
			return(job_output);
		});
	},
	
	
	getApps: function() {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/apps',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (apps_output) {
			console.log(apps_output);
			return(apps_output);
		});
	},
	
	
	getScreenshot: function(job_number) {
				
	var options = {
		uri: 'http://api.jarvice.com/jarvice/screenshot',
		qs: {
			username: process.env.username,
			apikey: process.env.apikey,
			number: job_number
		},
		headers: {
			'User-Agent': 'Request-Promise',
			'Accept':'image/png',
		},
		json: true // Automatically parses the JSON string in the response 
	};
	
	rp(options)
		.then(function (screenshot) {
			console.log('Image Received...');
			// Do something with the image
		});
	},
	
	
};