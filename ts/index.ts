import open = require('opn');
import { ChildProcess } from 'child_process';

export let openUrl = async urlArg => {
  const childProcess = await open(urlArg, {
    wait: false
  });
  return childProcess;
};
