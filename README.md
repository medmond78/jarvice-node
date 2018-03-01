# jarvice-node

A NodeJS library for the Nimbix Jarvice cloud computing platform

### Installation
`npm install nimbox-node`

### Credentials
The library looks for your API credentials environmental variables 'username' and 'apikey'

```
{username: process.env.username,
apikey: process.env.apikey}
	
```

### Methods/Usage
To use the library, you must include it:
`var jarvice = require("./lib/jarvice.js");`

The following methods are currently available, note that all callbacks are of the form: `function(error, results)`
See [Jarvice API docs](https://jarvice.readthedocs.io/en/latest/api/) for description of the required inputs and outputs of the various methods.

### Example
```

\\ Required the client...
var jarvice = require("./lib/jarvice.js");

\\ Define the job submission details...
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

\\ Submit the job!
jarvice.submitJob(options);

```

#### Methods
```
//jarvice.submitJob();

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

```