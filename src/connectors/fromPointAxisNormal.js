const vec3 = require('../math/vec3')

const create = require('./create')

/**
 * Create a connector from the given point, axis and normal.
 * @param {vec3} point - the point of the connector, relative to the parent geometry
 * @param {vec3} axis - the axis (directional vector) of the connector
 * @param {vec3} normal - the normal (directional vector) of the connector, perpendicular to the axis
 * @returns {connector} a new connector
 */
const fromPointAxisNormal = (point, axis, normal) => {
  let created = create()
  created.point = vec3.fromArray(point)
  created.axis = vec3.unit(axis)
  created.normal = vec3.unit(normal)
  return created
}

module.exports = fromPointAxisNormal
