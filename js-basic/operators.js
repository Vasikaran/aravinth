var a = 10;

if (a > 12){
    console.log('a is greater than 12');
}else if (a < 12){
    console.log('a is less than 12');
}

a = 14;

if (a > 12 && a%2 === 0){
    console.log('a is greater than 12 and its remainder is 0');
}else if (a < 12){
    console.log('a is less than 12');
}

if (a > 15 || a%2 === 0){
    console.log('a is less than 15 and its remainder is 0');
}else if (a < 12){
    console.log('a is less than 12');
}
