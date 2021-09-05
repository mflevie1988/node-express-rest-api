const fs = require('fs');
const existingLastCommitSha = require('process').env.LAST_COMMIT_SHA;
const LAST_COMMIT_SHA = existingLastCommitSha
  ? existingLastCommitSha
  : require('child_process').execSync('git rev-parse HEAD').toString().trim();

const common = { LAST_COMMIT_SHA, ...JSON.parse(fs.readFileSync('local-env-common.json')) };

let overrides = {};
if (fs.existsSync('local-env-override.json')) {
  overrides = JSON.parse(fs.readFileSync('local-env-override.json'));
}

let test = {};
if (fs.existsSync('local-env-test.json')) {
  test = JSON.parse(fs.readFileSync('local-env-test.json'));
}

module.exports = {
  common,
  overrides,
  test
};
