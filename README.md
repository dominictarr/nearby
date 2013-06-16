# nearby

Find points that are nearby each other. For physics calculations.

[![travis](https://travis-ci.org/dominictarr/nearby.png?branch=master)
](https://travis-ci.org/dominictarr/nearby)

[![testling](http://ci.testling.com/dominictarr/nearby.png)
](http://ci.testling.com/dominictarr/nearby)

## notes

My use case is modeling dense worlds of particles, where nearby things interact.

## api

### add(point)

Add a point, such as [vec2](http://npm.im/vec2), with `.x` and `.y`

### all(radius, eachPair)

call `eachPair` on every pair of points within `radius`

### nearby(point, radius, each)

Iterate over the points within `radius` of given `point`

## License

MIT
