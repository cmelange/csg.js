CSG = require('../csg.js');

let shape = CSG.CAG.fromPoints([[[0,0],[0,1],[1,1],[1,0]],
                                [[0.25,0.25],[0.25,0.75],[0.75,0.75],[0.75,0.25]]]);
shape = CSG.CAG.fromPoints([[1,0],[1,1],[0,1],[0,0]]);
let geomExtrude = shape.extrude({offset: [0,0,1], twiststeps: 1, twistangle: 0});

let geomRevolve = shape.rotateExtrude();

let geomNegativeExtrude = CSG.CAG.fromPoints([[[0,0],[0,1],[1,1],[1,0]]]).extrude({offset: [0,0,-1], twiststeps: 2, twistangle: 0});