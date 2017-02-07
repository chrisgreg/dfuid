# dfuid

### What is this?

A very small, light module to produce distributed unique ID's for whatever purpose required. This solution does not use any sort of cryptography to generate results - it produces a string out of some random numbers and provides you access to the hostname as well optionally.

### What does dfuid stand for?

Dumb Fast Unique ID

### Why should I use this over UUID or shortid?

If you need to generate an ID <i>ridiculous quickly</i>, the alternatives are too slow, and you don't require anything specific in generation.

### Installation

```bash
$ npm install --save dfuid
```

### Example Use
```javascript
import dfuid from 'dfuid';
const myId = dfuid();
// myId = chriss-mbp-0.0724114346331552774
```

### Testing
```
$ npm test
```

### Benchmarks comparing UUID, shortid and dfuid
```
$ npm run benchmark
```
#### Results

```
benchUUID*1000: 7.349ms
benchShortID*1000: 50.035ms
benchDfuid*1000: 1.861ms
benchUUID*1000: 8.292ms
benchShortID*1000: 43.056ms
benchDfuid*1000: 0.397ms
```
