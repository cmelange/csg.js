CSG = require('../csg.js')

let shape = CSG.CAG.fromPoints([[[0,0],[0,1],[1,1],[1,0]],
                                [[0.25,0.25],[0.25,0.75],[0.75,0.75],[0.75,0.25]]])
let geom = shape.extrude({offset: [0,0,1], twiststeps: 1, twistangle: 0})
console.log(geom)