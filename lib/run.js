import { execSync } from 'node:child_process';
import minimatch from 'minimatch';

function runTasks(options) {
  const { base = 'master', dryRun = false, exclude } = options;

  try {
    // Get current branch
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf8',
    }).trim();

    // Get branches already merged into base
    const mergedOutput = execSync(`git branch --merged ${base}`, {
      encoding: 'utf8',
    });

    const branchesToDelete = mergedOutput
      .split('\n')
      .map((b) => b.replace(/^\*\s*/, '').trim())
      .filter(
        (branch) =>
          branch &&
          branch !== base &&
          branch !== currentBranch &&
          !exclude.some((pattern) => minimatch(branch, pattern)),
      );

    if (branchesToDelete.length === 0) {
      console.log(`✅ No merged branches to delete from "${base}".`);
      return;
    }

    console.log(
      `🧹 The following branches have been merged into "${base}" and will be deleted:`,
    );
    branchesToDelete.forEach((branch) => console.log(`- ${branch}`));

    if (dryRun) {
      console.log('\n💡 This is a dry run. No branches have been deleted.');
    } else {
      branchesToDelete.forEach((branch) => {
        execSync(`git branch -d ${branch}`, { stdio: 'inherit' });
      });
      console.log('✅ Cleanup complete!');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

export default runTasks;
