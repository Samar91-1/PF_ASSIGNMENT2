function numberOfwords(str) { 

    const count = str.match(/[A-Z]/gi).length-1;

    return count;
}
console.log(numberOfwords('helloiam'));