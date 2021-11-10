function f1(x,y){
    let a = x + f2(y);
    let b = y + f3(x);

    return a + b;
}

function f2(x){
    return x - 3;
}

function f3(y){
    return y + 2;
}

//console.log(f1(2,3));

//--- x! synchronus

function func(x){

    if(x==0){
        return 1;
    }
        return x * func(x-1);


}

//console.log(func(4));

