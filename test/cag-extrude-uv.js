CSG = require('../csg.js')

let shape = CSG.CAG.fromPoints([[[0,0],[0,1],[1,1],[1,0]],
                                [[0.25,0.25],[0.25,0.75],[0.75,0.75],[0.75,0.25]]])
let geomExtrude = shape.extrude({offset: [0,0,1], twiststeps: 2, twistangle: 1})

let geomRevolve = shape.rotateExtrude()
console.log(geomRevolve)

let geomNegativeExtrude = CSG.CAG.fromPoints([[[0,0],[0,1],[1,1],[1,0]]]).extrude({offset: [0,0,-1], twiststeps: 2, twistangle: 0});