var array=[];
for (let i=1;i<=99;i++){
    array.push(i);
}
const n=100; //since array has digits 1 to 100

var total= (n+1)*(n)/2; // sum of n digits
for (let i=0;i<array.length;i++) {
	total -=array[i];
}
var missingnum=total; 
console.log(missingnum);