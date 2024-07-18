let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(3);
console.log(arr);



let arr2=arr.map((num)=>{
    return num*num;
});
console.log(arr2);

let arr3=arr.filter((num)=> num%2===0 );
console.log(arr3);

let arr4=arr.reduce((sum,num)=> sum+num,0 );
console.log(arr4);

arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i=0; i<arr.length;i++){
    console.log(arr[i]);
}


arr.forEach((i)=>console.log(i))

let twoDArr=[[1,2,3,4],[5,6,7,8]];
console.log(twoDArr);

console.log(twoDArr[1][2]);