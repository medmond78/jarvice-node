var jarvice = require("./lib/jarvice.js");


console.log('Working...');
  
console.log(process.env.username)
console.log(process.env.apikey)

        
jarvice.submitJob();

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
