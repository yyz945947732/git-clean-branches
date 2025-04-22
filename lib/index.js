import fs from 'fs-extra';

import runTasks from './run.js';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

const helpText = `git-clean-branches v${pkg.version}

  Usage: clean-branches [options]

  -h --help              Print this help
  -v --version           Print git-clean-branches version number
  -b --base <branch>     Specify base branch (default: master)
  -p --dry-run           Preview branches to delete without deleting
  -e --exclude <branch>  Exclude branch from deletion (supports glob patterns, can be repeated)

For more details, please see https://github.com/yyz945947732/git-clean-branches`;

const version = () => console.log(`v${pkg.version}`);

const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
