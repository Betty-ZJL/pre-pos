'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  collectionA=collectionA.filter( function (t) { return objectB.value.includes(t.key) });
  for(let x of collectionA)
    result.push(x.key);
  return result;
}
