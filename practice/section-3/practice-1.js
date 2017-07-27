'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let item of collectionA)
    if(objectB['value'].includes(item.key))
      item.count--;
  return collectionA;
}
