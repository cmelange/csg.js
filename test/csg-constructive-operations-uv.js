CSG = require('../csg.js')

let shape = CSG.CAG.fromPoints([[0,0],[0,1],[1,1],[1,0]])
let geomExtrude = shape.extrude({offset: [0,0,1], twiststeps: 2, twistangle: 0})
let cutGeom = geomExtrude.cutByPlane(CSG.CSG.Plane.fromNormalAndPoint([0,0,1],[0.5,0.5,0.5]))
console.log(cutGeom)