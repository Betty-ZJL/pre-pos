'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter( function (t) { return collectionB.includes(t) });
}
