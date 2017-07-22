'use strict';

function createUpdatedCollection(collectionA, objectB) {
   for(let i=0;i<collectionA.length;i++){
      if(objectB.value.indexOf(collectionA[i].key)>-1){
          let n=collectionA[i].count;
          while(n>=3){
              collectionA[i].count--; 
              n-=3;
          }
      }          
   }
   return collectionA;
}
