'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter( function (t) { return collectionB[0].includes(t) });
}
