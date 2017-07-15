var array = [2,4,5,6,7,8];

for (var i=0; i<array.length; i++){
    console.log(array[i]);
}

array.push(10);
console.log(array, 'push 10');
array.pop();
console.log(array, 'pop array');
