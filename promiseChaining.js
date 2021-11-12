

function add(x) {
  return x + 2;
}

function subs(x) {
  return x - 5;
}

function result(x) {
  console.log(x);
}

let value = 23;

const math = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof value == "number") {
      resolve(value);
    } else {
      reject("Specified value must be a number.");
    }
  }, 1000);
});

// math
// .then(add)
// .then(subs)
// .then(result)
// .catch(err=>console.log(err))
// .finally(data=>{

//     console.log("From finally");
// })

// async function something(){

//     try{

//     let data= await math;

        // let d=add(data);
        // let z=subs(data);
//     console.log(data);

//     }catch(err){

//         console.log("I'm here");
//         console.log(err);
//     }

// }

// something();
