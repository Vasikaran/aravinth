var int = 10;

console.log(typeof int, int);

int = int.toString();
console.log(typeof int, int);

int = parseInt(int)
console.log(typeof int, int);

var array = [1,2,3];
console.log(typeof array, array);

console.log(array.toString()); // do not use toString method to convert object to string

array = JSON.stringify(array);
console.log(typeof array, array);

var obj = {
    name: 'Vasi',
    age: 20
};
console.log(typeof obj, obj);

console.log(obj.toString()); // do not use toString method to convert object to string

obj = JSON.stringify(obj);
console.log(typeof obj, obj);
