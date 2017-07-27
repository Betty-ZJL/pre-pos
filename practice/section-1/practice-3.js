'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter( function (t) { return objectB['value'].includes(t) });
}
