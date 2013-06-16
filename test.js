

var Vec2 = require('vec2')
var near = require('./')()

//number of particles
var l = 4000
var w = 10000
var h = 1000

function rand(m) {
  return (Math.random()*m)
}

while(--l)
  near.add(new Vec2(rand(w), rand(h)))

near.sort()

var t = Date.now()
var e =0, c = near.items.length

console.log(near.all(100, function () {
  e++
}))

console.log('handshake', Date.now() - t, c, e/c)


//var t = Date.now()
//
//near.items.forEach(function (center) {
//  near.nearby(center, 100, function (x) {
//    e++
//  })
//})
//
//console.log('binary search', Date.now() - t, c, e, e/c)
//
//
//console.log(near.items)
