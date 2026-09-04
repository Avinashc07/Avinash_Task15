
function sort(arr){
arr.sort((a, b) => a - b);
var n = arr.length;
console.log(arr);
console.log("Maximum number of Array is : "+arr[n-1]);
}

function summation(arr){
var sum = 0;
for(i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
return sum;
}

function oddCounter(arr){
    var count = 0;
    for(i=0; i<arr.length; i++){
        if((arr[i] % 2) != 0){
            count++;
        }
    }
    return count;
}

var arr = [2, 34, 23, 12, 89, 9, 45];

console.log(sort(arr));
console.log("Sum of all elements of Array is : "+summation(arr));
console.log("Total ODD Numbers present in the arrays are : "+oddCounter(arr));