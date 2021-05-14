function first(myArray,fetchPosition){
    let indexpos =  fetchPosition;
    let newArray = [];
    
   
    if(fetchPosition == undefined){
        indexpos = 0;
      }else if (myArray != undefined && indexpos > 0 && indexpos <= myArray.length){       
       
        newArray =  myArray.slice(0,indexpos);
        return newArray;
      }else if (myArray != undefined && indexpos > myArray.length){
        newArray =  myArray.slice();
        return newArray;
      }else if(myArray == undefined || indexpos < 0){
          return  newArray;
      }     
    return myArray[indexpos];
}
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-1));
