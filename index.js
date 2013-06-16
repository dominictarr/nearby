var bs = require('./binary')

function dist(a, b) {
  var x = a.x - b.x
  var y = a.y - b.y
  return Math.sqrt(x*x + y*y)
}

module.exports = function (toPoint) {
  toPoint = toPoint || function (p) {
    return p.pos || p
  }


  function compare (a, b) {
    return toPoint(a).x - toPoint(b).x    
  }

  var items = []

  return {
    add: function (obj) {
      //insert an item. 
      items.push(obj)
    },
    all: function (radius, each) {
      items.sort(compare)
      var l = items.length, a, b
      var m = 0
      for(var i = 0; i < l; i++) {
        a = items[i]
        var min = a.y - radius
        var max = a.y + radius
        var maxX = a.x + radius
        for(var j = i + 1; (j < l && (b = items[j]).x < maxX); j++) {
          m ++
          if(b.y > min && b.y < max) {
            var d = dist(a, toPoint(b))
            if(d < radius)
            each(a, b, d)
          }
        }
      }
      return m
    },
    nearby: function (_point, radius, each) {
      var point = toPoint(_point)
      var x = point.x
      var min = x - radius
      var max = x + radius

      var i = bs(items, min, function (e) {
        return e.x - min
      })
      if(i < 0)
        i = ~i

      do {
        var a = items[i++]
        var d = dist(point, toPoint(a))
        if(d < radius) each(a, d)
      } while(x <= max && i < items.length)
    },

    sort: function () {
      items.sort(compare)
      return this
    },
    items: items
  }
}
