'use strict';

function collectSameElements(collectionA, collectionB) {
  
  var result=[];
  var collection=[];
  if(collectionA.length>collectionB.length){
      collection=collectionA;
      collectionA=collectionB;
      collectionB=collection;
  }
  for(i=0;i<collectionA.length;i++)
      if(collectionB.indexOf(collectionA[i])>-1)
         result.push(collectionA[i]) 
  return result;
  
}
