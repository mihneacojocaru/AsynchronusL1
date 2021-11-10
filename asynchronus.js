function f3(){
 console.log("First");
}

function f2(){
 console.log("Second")
}

function f1(){
 console.log("Hello!");
 setTimeout(f2,3000);
 f3();
}

f1();