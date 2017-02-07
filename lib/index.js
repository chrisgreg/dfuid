const os = require('os');
const hostname = os.hostname().toLowerCase();

function generate(includeHostname = false) {
  if (includeHostname) {
    return `${hostname}-${randomIntString()}`;
  }
  return randomIntString();
}

function randomIntString() {
  return (Math.random()+937/281191).toString(8);
}

module.exports = generate;
