function add()
{     var x = parseInt(document.getElementById("number1").value);
    var y = parseInt(document.getElementById("number2").value);
    try {
       
        if (isNaN(x) || isNaN(y)) 
      {
        throw "not a number";
      } 
      else 
      {
        var a = (x+y);
        alert("Result: " + a);
        document.getElementById("result").value = a;
      }
      }
      catch(err) {
        alert(err);
    
      }
    
  
}
function reset()
{
    document.getElementById("number1").value="";
    document.getElementById("number2").value ="";
    
    document.getElementById("result").value ="";
}