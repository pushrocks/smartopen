import open = require('opn');
import { ChildProcess } from 'child_process';

export let openUrl = async urlArg => {
  if(!(process.env.CI === 'true')) {
    const childProcess = await open(urlArg, {
      wait: false
    });
    return childProcess;
  } else {
    return null
  }
};
