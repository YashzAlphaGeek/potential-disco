import * as core from '@actions/core';
import * as core from '@actions/github';

try {
    const name = core.getInput('name');

    const outputVal = 'Hello ${name}';
    
    core.setOutput('greeting', 'outputVal');
}
catch (err) {
  // setFailed logs the message and sets a failing exit code
  core.setFailed(`Action failed with error ${err}`);
}