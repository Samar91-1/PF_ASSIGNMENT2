function createBase(num) {
    return function(N) {
   
      return num + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(10);
  addSix(21);
  