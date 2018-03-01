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

#### Jobs
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