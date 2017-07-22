'use strict';

function countSameElements(collection) {
   var result=[];
   while(collection.length){
      var flag=1;
      var x=collection.shift();
      if(x.length>1){
          if(x.length>4){
               var n=parseInt(x.substring(2,4));
          }else{
               var n=parseInt(x.substring(2,3));
          }
          x=x.substring(0,1);
          flag=2;
      }
      for(let i=0;i<result.length;i++){
          if(result[i].name==x){
              if(flag==2){
                  result[i].summary+=n;
              }else{
                  result[i].summary++;
              }
              flag=0;
          }
      }
      if(flag==1){
          result.push({name:x,summary:1});
      }
      if(flag==2){
          result.push({name:x,summary:n});
      }
  }
  return result;
}
