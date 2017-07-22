'use strict';

function countSameElements(collection) {
  var result=[];
  while(collection.length){
      var flag=1;
      var x=collection.shift();
      for(let i=0;i<result.length;i++){
          if(result[i].key==x){
              result[i].count++;
              flag=0;
          }
      }
      if(flag){
          result.push({key:x,count:1});
      }
  }
  return result;
}
