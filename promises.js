

let myStatus = true;

const example = new Promise ( (resolve,reject) => {
    setTimeout(()=>{
        if(myStatus == true){
            resolve("Something");
        } else {
            reject("Something else");
        } 
    },3000)
    
});

let rez="";

example.
then((data=>{
   rez=data;
}))
.catch(err=>{

    console.log(err);
})

console.log(rez);