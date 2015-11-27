import * as utils from './utils.js';

function getNodes(item, index) {
  return index ? item.nodes() : item.safeNodes();
}
export function all() {
  let nodes = arguments[0];
  if(!Array.isArray(nodes)) {
    nodes = utils.clone(arguments);
  }
  return utils.all(nodes.map(getNodes));
}