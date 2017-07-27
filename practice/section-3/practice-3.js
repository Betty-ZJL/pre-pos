'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  while(collectionA.length){
    var flag=1;
    var x=collectionA.shift();
    for(let i=0;i<collectionC.length;i++){
      if(collectionC[i].key==x){
        collectionC[i].count++;
        flag=0;
      }
    }
    if(flag){
      collectionC.push({key:x,count:1});
    }
  }
  for(let item of collectionC)
    if(objectB['value'].includes(item.key))
      item.count-=parseInt(item.count/3);
  return collectionC
}
