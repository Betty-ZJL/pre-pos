'use strict';

function countSameElements(collection) {
   var result=[];
   while(collection.length){
      var flag=1;
      var x=collection.shift();
      if(x.length>1){
          var n=parseInt(x.substring(x.length-1));
          x=x.substring(0,1);
          flag=2;
      }
      for(let i=0;i<result.length;i++){
          if(result[i].key==x){
              result[i].count++;
              flag=0;
          }
      }
      if(flag==1){
          result.push({key:x,count:1});
      }if(flag==2){
          result.push({key:x,count:n});
      }
  }
  return result;
}
