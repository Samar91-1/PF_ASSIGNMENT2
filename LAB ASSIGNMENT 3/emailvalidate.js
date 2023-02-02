
let validate = (str) =>
{
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str); 
}
console.log(validate("hellouncle@hotmail.com"));