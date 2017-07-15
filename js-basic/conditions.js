var a = true;
if (a){
    console.log('a is true');
}else if (!a){
    console.log('a is false');
}else{
    console.log('a is string');
}

switch (a) {
    case true:
        console.log('a is true');
    case false:
        console.log('a is false');
}

a = false;

if (a){
    console.log('a is true');
}else if (!a){
    console.log('a is false');
}else{
    console.log('a is string');
}

switch (a) {
    case true:
        console.log('a is true');
    case false:
        console.log('a is false');
}


if (typeof a === 'string'){
    console.log('a is a string');
}else{
    console.log('a is a boolean');
}

a = 'str';

if (typeof a === 'string'){
    console.log('a is a string');
}else{
    console.log('a is a boolean');
}
