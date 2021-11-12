

const link = `https://dog.ceo/api/breeds/image/random`;





async function ceva(){


    
     let data= await fetch(link);

     let d= await  data.json();

     console.log(d.message);
}


ceva();