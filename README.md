# git-clean-branches

<p>
  <a href="https://www.npmjs.com/package/git-clean-branches">
    <img src="https://img.shields.io/npm/v/git-clean-branches.svg" alt="Version" />
  </a>
  <a href="https://github.com/yyz945947732/gzteacher-workflow/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="/LICENSE.md">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

> A CLI tool to delete local Git branches that have already been merged into the base branch.

## Install

```bash
npm install --global git-clean-branches
```

## Usage

```bash
npx clean-branches [options]
```

### Options

```bash
-h --help              Print this help
-v --version           Print git-clean-branches version number
-b --base <branch>     Specify base branch (default: master)
-p --dry-run           Preview branches to delete without deleting
-e --exclude <branch>  Exclude branch from deletion (supports glob patterns, can be repeated)
```

### Examples

```bash
# Clean up branches already merged into the default 'master' branch
npx clean-branches

# Preview the branches that have been merged into the default 'master' branch
npx clean-branches --dry-run

# Clean up branches merged into 'master' excluding 'staging'
npx clean-branches --exclude 'staging'

# Clean up branches merged into 'master' excluding 'feature/*'
npx clean-branches --exclude 'feature/*'
```

## LICENSE

[MIT](https://github.com/yyz945947732/git-clean-branches/blob/master/LICENSE)

---

This project is created using [generator-stupid-cli](https://github.com/yyz945947732/generator-stupid-cli).
