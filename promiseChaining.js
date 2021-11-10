
function add (x) {

    return x+2;
}

function subs(x) {

    return x-5;
}

function result(x){
    console.log(x);
}


let value="da";

const math = new Promise( (resolve,reject) => {
    setTimeout(
             ()=>{
          if(typeof value == "number"){
            resolve(value);
            } else {
            reject("Specified value must be a number.");
            }

    },1000)
});

// math
// .then(add)
// .then(subs)
// .then(result)
// .catch(err=>console.log(err))
// .finally(data=>{

//     console.log("From finally");
// })



// async function ceva(){

//     try{

//     let data= await math();

//     console.log(data);

//     }catch(err){

//         console.log("sunt aici");
//         console.log(err);
//     }
    
// }

