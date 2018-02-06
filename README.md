# opensecrets-js

A NodeJS library for the Nimbix Jarvice cloud computing platform

### Installation
`npm install nimbox-node`

### Credentials
The library looks for your API credentials environmental variables 'username' and 'apikey'

### Methods/Usage
To use the library, you must include it:
var jarvice = require("./lib/jarvice.js");

The following methods are currently available, note that all callbacks are of the form: `function(error, results)`
#### Jobs
jarvice.getJobs();

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
