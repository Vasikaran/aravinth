var data = 'data from global';

if (true){
    let data = 'data from block scobe'; // block scobe
    console.log(data);
}

console.log(data);

if (true){
    data = 'overwrite varibale';
    console.log(data);
}

console.log(data);

function sample(){ // function scobe
    var data = "data inside function scobe";
    if (true){
        let data = 'inside block';
        console.log(data);
    }
    console.log(data);
}

sample();
console.log(data);
