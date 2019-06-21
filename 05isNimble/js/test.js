(function(){
  this.assert = function assert(value, desc){
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
  }
})();
