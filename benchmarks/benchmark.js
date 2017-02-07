const bench = require('fastbench')
const uuidV4 = require('uuid/v4')
const shortid = require('shortid')
const dfuid = require('../lib/index.js');

var run = bench([
  function benchUUID (done) {
    uuidV4();
    done();
  },
  function benchShortID (done) {
    shortid.generate();
    done();
  },
  function benchDfuid (done) {
    dfuid();
    done();
  }
], 1000);

run(run)
