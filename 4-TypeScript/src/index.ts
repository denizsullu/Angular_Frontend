
//  let tsArray=()=>{
//   let array:number[] = [1,2,3,4,5,6,7,8];
//   console.log(array)
// }
// tsArray();

function tsFunction2(x:number,y:number){
 console.log(x+y);
}
tsFunction2(2,3)

function tsFunction3(x:any,y:number):number{
  return x+y;
}
console.log(tsFunction3(4,6));